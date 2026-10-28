
#!/usr/bin/env python3
"""Display the Jekyll Liquid include tree."""

from __future__ import annotations

import argparse
import contextlib
import io
import re
from collections import defaultdict
from pathlib import Path


# ============================================================
# 1. CONFIGURATION
# ============================================================

ROOT = Path(__file__).resolve().parent.parent

SEARCH_DIRS = [
    ROOT / "_includes",
    ROOT / "_layouts",
]

INCLUDE_RE = re.compile(
    r"""{%-?\s*include(?:_relative)?\s+["']?([^"'\s%]+)"""
)

TEMPLATE_SUFFIXES = {
    ".liquid",
    ".html",
    ".md",
    ".markdown",
    ".xml",
    ".json",
}


# ============================================================
# 2. PATH AND FILE DISCOVERY
# ============================================================

def relative(path: Path) -> str:
    """Return a path relative to the repository root."""
    return path.relative_to(ROOT).as_posix()


def find_templates() -> list[Path]:
    """Find template files in the configured directories."""
    files = set()

    for directory in SEARCH_DIRS:
        if directory.exists():
            files.update(
                path
                for path in directory.rglob("*")
                if path.is_file()
                and path.suffix.lower() in TEMPLATE_SUFFIXES
            )

    # Pages may also include templates.
    files.update(
        path
        for path in ROOT.glob("*.html")
        if path.is_file()
    )

    return sorted(files)


# ============================================================
# 3. BUILD INCLUDE GRAPH
# ============================================================

def build_graph(files: list[Path]):
    """Map each template to the files it includes."""
    known_files = {
        relative(path): path
        for path in files
    }

    graph = defaultdict(list)
    unresolved = defaultdict(list)

    for source in files:
        source_name = relative(source)
        text = source.read_text(encoding="utf-8", errors="replace")

        for match in INCLUDE_RE.finditer(text):
            include_name = match.group(1)

            candidates = [
                include_name,
                f"{include_name}.liquid",
                f"{include_name}.html",
            ]

            resolved = None

            for candidate in candidates:
                # Standard Jekyll include paths are relative to _includes.
                include_path = ROOT / "_includes" / candidate

                if include_path.is_file():
                    resolved = relative(include_path)
                    break

                # include_relative paths are relative to the source file.
                relative_path = source.parent / candidate

                if relative_path.is_file():
                    resolved = relative(relative_path)
                    break

            if resolved:
                graph[source_name].append(resolved)
            else:
                unresolved[source_name].append(include_name)

    return graph, unresolved, known_files


# ============================================================
# 4. PRINT INCLUDE TREE
# ============================================================

def print_tree(
    start: str,
    graph,
    unresolved,
    indent: str = "",
    stack=None,
):
    """Print nested includes while guarding against cycles."""
    if stack is None:
        stack = set()

    print(f"{indent}{start}")

    if start in stack:
        print(f"{indent}└── [cycle]")
        return

    children = graph.get(start, [])
    missing = unresolved.get(start, [])

    entries = [(child, True) for child in children]
    entries += [(name, False) for name in missing]

    for index, (name, resolved) in enumerate(entries):
        last = index == len(entries) - 1
        branch = "└── " if last else "├── "

        if resolved:
            print_tree(
                name,
                graph,
                unresolved,
                indent + branch,
                stack | {start},
            )
        else:
            print(f"{indent}{branch}[unresolved] {name}")


def capture_tree(start: str, graph, unresolved) -> list[str]:
    """Capture a printed tree as lines of text."""
    buffer = io.StringIO()

    with contextlib.redirect_stdout(buffer):
        print_tree(start, graph, unresolved)

    return buffer.getvalue().splitlines()


# ============================================================
# 5. FIND FILES THAT INCLUDE A FILE OR DIRECTORY
# ============================================================

def find_includers(
    target: str,
    graph,
    known_files,
) -> tuple[set[str], set[str], set[str]]:
    """
    Find direct and indirect includers of a file or directory.

    Returns:
        targets: Files matched by the target path.
        direct: Files that directly include a target.
        indirect: Files that indirectly include a target.
    """
    target = target.rstrip("/")
    target_path = ROOT / target

    if target_path.is_file():
        name = relative(target_path)
        targets = {name} if name in known_files else set()

    elif target_path.is_dir():
        targets = {
            name
            for name in known_files
            if name.startswith(target + "/")
        }

    else:
        targets = set()

    if not targets:
        return targets, set(), set()

    # Build reverse graph: included file -> files that include it.
    reverse = defaultdict(set)

    for source, children in graph.items():
        for child in children:
            reverse[child].add(source)

    # Find direct includers.
    direct = set()

    for name in targets:
        direct.update(reverse.get(name, set()))

    direct -= targets

    # Find all includers recursively.
    all_includers = set()
    pending = list(direct)

    while pending:
        current = pending.pop()

        for source in reverse.get(current, set()):
            if source not in all_includers and source not in targets:
                all_includers.add(source)
                pending.append(source)

    # Exclude direct includers from the indirect set.
    indirect = all_includers - direct

    return targets, direct, indirect

# ============================================================
# 6. MAIN
# ============================================================

def main():
    parser = argparse.ArgumentParser(
        description="Show which Jekyll templates include which files.",
        epilog="""Examples:
  # Show include trees starting from top-level templates
  python3 _scripts/liquid_include_tree.py

  # Show only include trees rooted at files in _includes/lqd/
  python3 _scripts/liquid_include_tree.py --directory _includes/lqd/

  # Show the include tree starting from a particular file
  python3 _scripts/liquid_include_tree.py --file _layouts/default.html

  # Find files that directly or indirectly include a particular file
  python3 _scripts/liquid_include_tree.py --used-by _includes/lqd/contest-qn-sol-link.liquid

  # Find files that directly or indirectly include files in a directory
  python3 _scripts/liquid_include_tree.py --used-by _includes/lqd/

  # Save the tree to a text file
  python3 _scripts/liquid_include_tree.py --output liquid-include-tree.txt
""",
        formatter_class=argparse.RawDescriptionHelpFormatter,
    )

    parser.add_argument(
        "--file",
        help="Show the include tree starting from a file.",
    )

    parser.add_argument(
        "--directory",
        help="Show include trees rooted at files within a directory.",
    )

    parser.add_argument(
        "--used-by",
        help="Show direct and indirect includers of a file or directory separately.",
    )

    parser.add_argument(
        "--output",
        type=Path,
        help="Write output to a text file instead of the terminal.",
    )

    args = parser.parse_args()

    if sum(bool(value) for value in (args.file, args.directory, args.used_by)) > 1:
        parser.error("--file, --directory, and --used-by cannot be combined.")

    files = find_templates()
    graph, unresolved, known_files = build_graph(files)

    lines = []

    if args.used_by:
        targets, direct, indirect = find_includers(
            args.used_by,
            graph,
            known_files,
        )

        if not targets:
            parser.error(
                f"No scanned template files found for: {args.used_by}"
            )

        lines.append(f"Target: {args.used_by}")
        lines.append("")
        lines.append("Files in the target path:")
        lines.extend(f"  {name}" for name in sorted(targets))

        lines.append("")
        lines.append("Direct includers:")
        if direct:
            lines.extend(f"  {name}" for name in sorted(direct))
        else:
            lines.append("  None")

        lines.append("")
        lines.append("Indirect includers:")
        if indirect:
            lines.extend(f"  {name}" for name in sorted(indirect))
        else:
            lines.append("  None")

    elif args.file:
        start = args.file

        if start not in known_files:
            parser.error(f"File not found among scanned templates: {start}")

        lines.extend(capture_tree(start, graph, unresolved))

    elif args.directory:
        directory = args.directory.rstrip("/")
        directory_path = ROOT / directory

        if not directory_path.is_dir():
            parser.error(f"Directory not found: {args.directory}")

        # Show the include tree rooted at each file in the directory.
        roots = sorted(
            name
            for name in known_files
            if name.startswith(directory + "/")
        )

        if not roots:
            parser.error(f"No scanned template files found in: {args.directory}")

        for root in roots:
            lines.extend(capture_tree(root, graph, unresolved))
            lines.append("")

    else:
        # Print trees for templates that are not themselves included.
        included = {
            child
            for children in graph.values()
            for child in children
        }

        roots = sorted(set(graph) - included)

        for root in roots:
            lines.extend(capture_tree(root, graph, unresolved))
            lines.append("")

    output = "\n".join(lines).rstrip() + "\n"

    if args.output:
        output_path = args.output

        if not output_path.is_absolute():
            output_path = ROOT / output_path

        output_path.parent.mkdir(parents=True, exist_ok=True)
        output_path.write_text(output, encoding="utf-8")
        print(f"Include tree written to {output_path}")
    else:
        print(output, end="")


if __name__ == "__main__":
    main()
