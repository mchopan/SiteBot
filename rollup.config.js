import resolve from '@rollup/plugin-node-resolve';
import typescript from '@rollup/plugin-typescript';

export default {
    input: 'src/sitebot.ts',
    output: {
        file: 'dist/sitebot.js',
        format: 'es'
    },
    plugins: [
        resolve(),
        typescript()
    ],
    external: ['lit']
}; 