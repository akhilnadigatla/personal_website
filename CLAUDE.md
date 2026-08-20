# akhilnadigatla.com

Personal portfolio site. Static HTML/CSS/JS, no build step, no framework, no git repo (as of 2026-08-20).

## Serving

- Apache2 virtual host: `/etc/apache2/sites-available/akhilnadigatla.com.conf` (+ `-le-ssl.conf` for HTTPS, managed by certbot).
- `DocumentRoot` is this directory — edits to files here take effect immediately on page reload, no restart needed.
- Only changing the Apache config itself requires `sudo systemctl reload apache2`.

## Structure

- `index.html` — the entire site (single page).
- `assets/css/` — stylesheet (`templatemo-style.css`) plus vendor CSS (flex-slider, fontawesome, lightbox, owl carousel).
- `assets/js/custom.js` — site-specific JS; other files in `assets/js/` are vendor libraries.
- `assets/images/` — photos, project screenshots, favicons.
- `assets/docs/` — PDFs linked from the site (resume, CV, thesis, project reports).
- `vendor/` — bootstrap and jquery, included directly (not via package manager).
- `site.webmanifest`, `google7f91650784955b66.html` — PWA manifest and Google site-verification file; leave as-is.
- `prepros-6.config` — leftover config from the Prepros build tool; not currently used for building.

## Notes

- No `package.json`, no npm/build pipeline — CSS/JS are edited directly, not compiled.
- No version control currently in place. Consider `git init` here before making significant changes, so edits are reversible.
- Owned by `akhil`, so no `sudo` needed to edit files in this directory.
