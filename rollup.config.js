const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');
const terser = require('@rollup/plugin-terser');

module.exports = {
    input: 'src/sitebot.ts',
    output: {
        dir: 'dist',
        format: 'es',
        sourcemap: true,
        minifyInternalExports: true
    },
    plugins: [
        resolve(),
        typescript({
            outDir: 'dist',
            declaration: true,
            declarationDir: 'dist/types'
        }),
        terser({
            format: {
                comments: false
            }
        })
    ],
    external: ['lit', 'lit/decorators.js', 'lit-element'],
    treeshake: {
        moduleSideEffects: false,
        propertyReadSideEffects: false
    }
}; 