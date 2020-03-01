// noinspection JSUnusedGlobalSymbols,JSUnusedLocalSymbols
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
};
