import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// If you're deploying to GitHub Pages at https://<user>.github.io/<repo>/
// set `base` to `/<repo>/`. Alternatively, use `./` for relative paths
// (works with custom domains). Below we set base for the repository
// `my-portfolio` and output to `docs/` so GitHub Pages can serve from
// the `main` branch's /docs folder without extra tooling.
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react()],
  build: {
    outDir: 'docs',
  },
})
