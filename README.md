# Ilanit C. Hoory, Ed.D. — personal site

A one-page site: Writing, Tools, Speaking, About, Contact. Built with Astro 5 and Tailwind 4. It is static, with no database.

## Updating the content

Everything on the page comes from one file: `src/data/site.ts`.

- **New article:** copy an entry in `articles`, then change the title, outlet, date (`"YYYY-MM"`), summary, and link. Newest articles appear first.
- **New tool:** copy an entry in `tools`.
- **New talk:** copy an entry in `talks`. Set `status` to `"upcoming"` or `"presented"`. If the list is empty, the Speaking section is hidden.
- **Photos:** put the image in `public/` (for example `public/headshot.jpg`), then set `headshot: "/headshot.jpg"`. The About photo works the same way with `aboutImage`.

Save the file. Netlify rebuilds the site after the change is pushed to GitHub.

## Running it locally

This needs Node 18.20 or newer (see `.nvmrc`).

```bash
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # production build into dist/
npm run preview  # preview the build
```

## Deploying

Deploy to Netlify from the GitHub repo. `netlify.toml` already sets the build command and the output folder.
