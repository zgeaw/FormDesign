const {terser} = require('rollup-plugin-terser');
const {author, license, name, version} = require('../package.json');
const getBanner = require('./utils/getBanner');
const {globals} = require('./common.var');

/// banner
const banner = {
    author: `2021-${new Date().getFullYear()} ${author}\n`,
    license,
    name,
    version
};

const OutputOptions = () => {
    const baseOutputOptions = {
        format: 'umd',
        dir: 'dist',
        globals,
        name: 'FormDesign',
        entryFileNames: 'index.js',
        sourcemap: false,
        banner: getBanner(banner),
        sourcemapExcludeSources: false
    };

    const miniOutputOptions = Object.assign({}, baseOutputOptions, {
        entryFileNames: 'index.min.js',
        plugins: [terser()]
    });

    return [baseOutputOptions, miniOutputOptions];
};

module.exports = OutputOptions;
