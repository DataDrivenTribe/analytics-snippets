# Contributing to Analytics Snippets

Thank you for helping make this repo a useful resource for the analytics community!

This repository collects **atomic, reusable helpers** for solving common problems in:

* Google Analytics 4 (GA4)
* BigQuery (GA4 export)
* Looker Studio (calculated fields, charts)
* JavaScript-based tracking (GTM, gtag.js)

---

## Snippet guidelines

Each snippet must:

1. **Be self-contained** - one concept per file.
2. **Use kebab-case** for file names. Examples:

   * `scroll-depth-tracker.js`
   * `ga4-channel-pivot.sql`
   * `yoy-growth-calculated-field.txt`
3. **Include a header comment** (see template below).
4. **Be copy-paste ready** - no build step, no dependencies.
5. **Favor brevity over completeness** - aim for max \~50 lines.

---

## File structure

Put files in one of these folders:

* `js/` → JavaScript for GA4 tracking, GTM, etc.
* `sql/` → BigQuery for GA4 event export
* `looker-studio/` → Calculated fields, formulas, or chart JSON
* Add a new folder only if it fits a distinct platform (e.g. `python/`)

---

## Snippet header format

Each file should start with a comment block like:

```js
/*
  Title: File download tracker
  Docs: https://datadriventribe.com/blog/file-download-tracking/
  Author: Your Name or Org
  License: MIT – see LICENSE in repo
*/
```

* **Title** → clear, concise name
* **Docs** → link to a related tutorial or explanation.
  If you don’t have one, you can use:
  `https://datadriventribe.com/blog/`
* **Author** → You or your company
* **License** → Always `MIT`

---

## Submitting a pull request

When opening a PR:

* Include a short **description** of what your snippet solves.
* Mention the **minimum version** if applicable (e.g., GA4, SQL dialect).
* Ensure there are **no unrelated changes** or files.

We'll review and tag the snippet for inclusion in future blog posts and newsletters.

---

## Good first contributions

New contributors are welcome! You can look for these labels:

* `good first issue`
* `needs docs link`
* `needs header comment`

---

## Thanks

We appreciate every contributor. 

---

**Questions?**
Open an issue or reach out via [datadriventribe.com](https://datadriventribe.com/).
