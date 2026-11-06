# Company Site Location Website

A small static website built with HTML, CSS, and JavaScript. No SQL, database, login, admin panel, or backend.

## Edit your information

Open `app.js` and edit:

- `COMPANY_NAME`
- `SITES` entries: `name`, `area`, `contactName`, `phone`, `locationUrl`, and optional `note`

Use a full Google Maps URL for `locationUrl`, for example a Google Maps place/share link.

## Add your company logo

The header currently uses a simple antenna icon and company name. To use your real logo, place an image such as `logo.png` in this folder and replace the `.brand-mark` SVG in `index.html` with:

`<img src="logo.png" alt="Company logo" style="width:86px;height:86px;object-fit:contain">`

## Publish with GitHub Pages

1. Create a GitHub repository.
2. Upload `index.html`, `style.css`, `app.js`, `details-inline.js`, and `logo.png` to the repository root.
3. In repository Settings → Pages, choose deployment from the `main` branch and `/ (root)`.
4. Save and wait for GitHub Pages to publish the site.

## Important limitation

This is a static directory. All visitors see the same information, but they cannot add or edit sites through the website. To change information, edit `app.js` and publish the updated files again. Do not put private or sensitive customer information in a public GitHub Pages repository.
