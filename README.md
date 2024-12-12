# Purpose

Bug reproduction of esbuild-plugin-lit-css

## Getting started

```bash
git clone https://github.com/KonnorRogers/esbuild-plugin-lit-css-reproduction
cd esbuild-plugin-lit-css-reproduction
npm install
npm run build
npx serve
```

Go to `http://localhost:3000` and the callout's CSS does not render as expected.

Go into `esbuild.config.js` and comment out the `replace()` function and the lit plugin will work as expected.

## Related issues


<https://github.com/evanw/esbuild/issues/2607>

<https://github.com/angular/angular-cli/issues/26326>

