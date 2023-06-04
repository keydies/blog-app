import swc from 'rollup-plugin-swc';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import del from 'rollup-plugin-delete';
import commonjs from '@rollup/plugin-commonjs';

const config = {
    treeshake: false,
    input: './src/index.ts',
    output: {
        dir: 'dist',
        format: 'cjs',
    },
    plugins: [
        del({ targets: 'dist/*' }),
        commonjs(),
        nodeResolve({
            extensions: ['.js', '.ts'],
            moduleDirectories: [],
            preferBuiltins: false,
        }),
        swc(),
    ],
};

export default config;