const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/home/ilsecenteno/Escritorio/Caterpi/.cache/dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("/home/ilsecenteno/Escritorio/Caterpi/src/pages/404.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("/home/ilsecenteno/Escritorio/Caterpi/src/pages/index.js"))),
  "component---src-pages-page-2-js": hot(preferDefault(require("/home/ilsecenteno/Escritorio/Caterpi/src/pages/page-2.js"))),
  "component---src-pages-using-typescript-tsx": hot(preferDefault(require("/home/ilsecenteno/Escritorio/Caterpi/src/pages/using-typescript.tsx")))
}

