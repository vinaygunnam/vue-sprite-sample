/* eslint-disable no-param-reassign */
module.exports = {
    chainWebpack: config => {
        config.module.rules.delete('svg');
    },

    configureWebpack: config => {
        config.module.rules.push({
            test: /\.svg/,
            loader: 'vue-svg-sprite-loader'
        });
    }
};
