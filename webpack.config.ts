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
            main: join(__dirname, './src/main.ts'),
            // https://github.com/NodeRedis/node_redis/issues/790#issuecomment-318904983
            hiredis: join(__dirname, './src/aliases/hiredis.ts'),
            menuExtra: join(__dirname, './src/lib/Telegraf/Extra/menu.ts'),
            botTypings: join(__dirname, './src/lib/Telegraf/botTypings.d.ts'),
            telegrafRedis: join(__dirname, './src/lib/Telegraf/Utils/redis.ts'),
            menuKeyboard: join(__dirname, './src/lib/Telegraf/Keyboard/menu.ts')
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
