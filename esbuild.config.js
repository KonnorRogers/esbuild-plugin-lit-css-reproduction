import * as esbuild from 'esbuild'
import { litCssPlugin } from 'esbuild-plugin-lit-css';
import { replace } from 'esbuild-plugin-replace';

;(async () => {
  await esbuild.build({
    format: 'esm',
    target: 'es2020',
    entryPoints: ['src/index.ts', 'src/components/callout/callout.ts'],
    bundle: true,
    outdir: 'dist',
    splitting: true,
    treeShaking: true,
    chunkNames: 'chunks/[name].[hash]',
    plugins: [
      // Comment this out and everything works as expected.
      replace(),
      litCssPlugin()
    ]
  })
})()
