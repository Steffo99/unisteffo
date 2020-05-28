import SentryCliPlugin from "@sentry/webpack-plugin";
const DefinePlugin = require("webpack/lib/DefinePlugin");


export default function (config, env, helpers) {
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react"] = "preact/compat";
    // noinspection JSUnresolvedVariable
    config.resolve.alias["react-dom"] = "preact/compat";

    config.module.rules.push(
        {
            test: /\.nojekyll$/,
            loader: 'file-loader',
            options: {
                name: '.nojekyll'
            }
        }
    );
    config.module.rules.push(
        {
            test: /CNAME$/,
            loader: 'file-loader',
            options: {
                name: 'CNAME'
            }
        }
    );

    config.plugins.push(
        new DefinePlugin({"process.env.RELEASE": `"${process.env.npm_package_version}"`})
    );

    if(env.production) {
        config.plugins.push(
            new SentryCliPlugin({
                include: './src',
                rewrite: true,
                ignore: ['node_modules'],
                configFile: '.sentryclirc',
                release: process.env.npm_package_version,
            })
        )
    }

};
