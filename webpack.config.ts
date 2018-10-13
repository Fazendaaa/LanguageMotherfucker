import { join } from 'path';

module.exports = {
    target: 'node',
    mode: 'development',
    entry: join(__dirname, './src/main.ts'),
    node: {
        __dirname: false
    },
    output: {
        filename: 'main.js',
        path: join(__dirname, 'dist')
    },
    resolve: {
        alias: {
            main: join(__dirname, './src/main.ts')
        },
        extensions: [
            '.js',
            '.ts',
            '.tsx'
        ]
    },
    module: {
        rules: [
            {
                test: /\.mjs$/,
                include: /node_modules/,
                type: 'javascript/auto'
            },
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: [
                    /node_modules/,
                    /tests/
                ]
            }
        ]
    }
};
