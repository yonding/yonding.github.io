# yonding.github.io

Single-page academic site. Plain Jekyll, no theme, no plugins, so GitHub Pages builds it as is.
The layout follows the design of geppa.github.io.

## Everyday edits

- News: add a line at the top of `_data/news.yml`.
- New paper: copy a block in `_data/publications.yml` and drop its figures into `assets/img/pubs/` (WebP, max 1600 px wide). The first figure is the teaser.
- Bio, links, education: `_data/profile.yml`.
- "Now" line under the name: `now:` in `_data/profile.yml`. Leave it empty to hide it.
- Accent color: `--accent` in `assets/css/main.css`.

The paper maps live in `research/` as standalone HTML pages.
The previous academicpages version of this site is kept on the `academicpages-backup` branch.
