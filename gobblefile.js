var gobble = require('gobble'),
    commonjs = require('rollup-plugin-commonjs'),
    npm = require('rollup-plugin-npm'),
    babel = require('rollup-plugin-babel');

module.exports = gobble([
    gobble('resources/static/fonts').moveTo('fonts'),
    gobble('node_modules/font-awesome/fonts').moveTo('fonts'),
    gobble('resources/static/images').moveTo('images'),
    gobble('resources/sass')
    .transform('sass', {
        src: 'style.scss',
        dest: 'css/style.css',
        outputStyle: 'compressed',
        sourceMapEmbed: true
    }),
    gobble('resources/js').transform('rollup', {
        entry: 'chantron.js',
        dest: 'js/chantron.js',
        format: 'umd',
        moduleName: 'chantron', // becomes `window.myApp`
        moduleId: 'chantron',
        globals: {},
        plugins: [
            babel({
                exclude: 'node_modules/**'
            }),
            npm({
                jsnext: true,
                main: true
            }),
            commonjs({
                include: 'node_modules/**',
            })
        ]
    })
]);
