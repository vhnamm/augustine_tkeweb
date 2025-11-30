## Quick context

- This is a small React + Vite storefront (no backend) that uses a JSON file as a mock API (`db.json`) and the browser to render components.
- App entry: `src/main.jsx` → `src/App.jsx` → route list in `src/components/routes/routes.jsx`.

## Architecture / big picture

- Routing: all routes are declared in `src/components/routes/routes.jsx`. `MainLayout` (`src/Layouts/MainLayout/MainLayout.jsx`) wraps most pages (Header -> Outlet -> Footer).
- Pages live under `src/pages/*`. Re-usable UI components live under `src/components/` and layout-specific components under `src/Layouts/components/` (e.g. `SearchForm`, `Header`, `Footer`).
- No global state manager: most components fetch data directly from the mock API and keep local state with React hooks (see `useEffect` / `useState` in `SearchForm.jsx`, `HomeProducts.jsx`, `Collections.jsx`).

## Important developer workflows & commands

- Start the dev app (Hot Module Reload):

  ```powershell
  npm run dev
  ```

- Build for production:

  ```powershell
  npm run build
  ```

- Preview the production build:

  ```powershell
  npm run preview
  ```

- Linting: `npm run lint` (see `eslint.config.js` — rule `no-unused-vars` ignores names starting with capital letters or an underscore).

## How the mock API works

- The repository includes `db.json` used as a mock REST API. Components fetch endpoints on `http://localhost:3000` (for example `GET /products` or `GET /products?name_like=keyword`).
- The project does not include a `json-server` npm script. To run the mock server start it in a separate terminal:

  ```powershell
  npx json-server --watch db.json --port 3000
  ```

## Conventions & patterns to follow

- Alias paths are configured in `vite.config.js`: `~` → `/src` and `~components` → `/src/components` (use these in imports). Example: `import MainLayout from "~/layouts/MainLayout/MainLayout"`.
- Styling: SCSS + CSS Modules. Files named `*.module.scss` are imported as module-scoped styles (`import styles from './Component.module.scss'`). There is also a global `GlobalStyle.scss`.
- Components and directories use PascalCase names (e.g., `Header.jsx`, `HomeProducts.jsx`). Pay close attention to a few existing typos — for example the `pages/Produtcs/Products.jsx` directory is spelled `Produtcs` (note the missing 'c') — preserve or carefully rename in a coordinated change.

## Common request/response patterns to reference

- Search uses `http://localhost:3000/products?name_like=${keyword}` in `src/Layouts/components/Search/SearchForm.jsx`.
- Home product lists use `GET /products` and `GET /collections` in `src/pages/Home/components/HomeProducts/HomeProducts.jsx`.

## When making changes

- Keep changes targeted: this project favors component-local data fetching and minimal global coupling.
- If you introduce a new script or server (for example, to run the json-server automatically), update `package.json` and include short usage instructions in the README.

If anything in this file looks unclear or you want me to include repo-specific quick start snippets (for example, an npm script that starts both Vite and json-server concurrently), tell me and I'll iterate. ✅
