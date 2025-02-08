const resolve = require('@rollup/plugin-node-resolve');
const typescript = require('@rollup/plugin-typescript');

module.exports = {
    input: 'src/sitebot.ts',
    output: {
        dir: 'dist',
        format: 'es'
    },
    plugins: [
        resolve(),
        typescript({
            outDir: 'dist',
            declaration: true,
            declarationDir: 'dist/types'
        })
    ],
    external: ['lit']
}; 