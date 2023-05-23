const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerWebpackPlugin = require('css-minimizer-webpack-plugin');
const TerserWebpackPlugin = require('terser-webpack-plugin');
const ESLintWebpackPlugin = require('eslint-webpack-plugin');
const Dotenv = require('dotenv-webpack');

const isDev = process.env.NODE_ENV === 'development';
const optimization = () => {
    const config = {
        splitChunks: {
            chunks: 'all'
        }
    };
    if (!isDev) {
        config.minimizer = [
            new CssMinimizerWebpackPlugin(),
            new TerserWebpackPlugin()
        ];
    }
    return config;
};

module.exports = {
    entry: './src/index.tsx',
    resolve: {
        extensions: ['.js', '.ts', '.jsx', '.tsx', '.json', '.css', '.scss', '.png', '.jpg', '.jpeg', '.svg', '.ttf'],
        alias: {
            '@': path.resolve(__dirname, 'src'),
            '@app': path.resolve(__dirname, 'src/app'),
            '@processes': path.resolve(__dirname, 'src/processes'),
            '@pages': path.resolve(__dirname, 'src/pages'),
            '@widgets': path.resolve(__dirname, 'src/widgets'),
            '@shared': path.resolve(__dirname, 'src/shared'),
        }
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                include: path.resolve(__dirname, 'src'),
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            '@babel/preset-env',
                            ['@babel/preset-react', {
                                'runtime': 'automatic'
                            }]
                        ]
                    }
                }
            },
            {
                test: /\.(ts|tsx)$/,
                exclude: /node_modules/,
                use: 'ts-loader'
            },
            {
                test: /\.((c|sa|sc)ss)$/i,
                use: [
                    // 'style-loader', // Вынос стилей в JS
                    MiniCssExtractPlugin.loader, // Вынос стилей  CSS
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.(png|jpe?g|gif|ttf)$/,
                type: 'asset/resource',
            },
            {
                test: /\.svg$/,
                type: 'asset/inline'
            }
        ]
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/index.html',
            minify: {
                collapseWhitespace: !isDev
            }
        }),
        new MiniCssExtractPlugin({
            filename: isDev ? '[name].css' : '[name].[contenthash].css'
        }),
        new ESLintWebpackPlugin({
            extensions: ['js', 'jsx', 'ts', 'tsx']
        }),
        new Dotenv(),
    ],
    optimization: optimization(),
    devServer: {
        port: 3333,
        hot: isDev,
        open: ['http://localhost:3333/crm-test'],
        historyApiFallback: {
            index: '/index.html'
        },
        client: {
            overlay: {
                errors: true,
                warnings: false,
                runtimeErrors: true,
            },
        },
    },
    devtool: isDev ? 'source-map' : undefined,
    output: {
        clean: true,
        path: path.resolve(__dirname, 'dist'),
        filename: isDev ? '[name].js' : '[name].[contenthash].js',
    }
};