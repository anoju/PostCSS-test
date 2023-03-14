module.exports = {
  plugins: [
    require('postcss-assets')({
      loadPaths: ['images/'],
      relativeTo: 'css/',
      cachebuster: true
    }),
    require('postcss-sprites')({
      stylesheetPath: './pcss',
      spritePath: './images/sprite',
      retina: true
    }),
    require('postcss-import'),
    require('postcss-inline-svg')({
      // paths: './images/svg/',
      removeFill: true,
      removeStroke: true
    }),
    // postcss-nested 쓸바엔 SCSS?
    require('postcss-nested'),
    require('autoprefixer'),
    // postcss-preset-env 역할을 잘 모르겠음
    require('postcss-preset-env')({
      stage: 3,
      features: {
        'nesting-rules': true,
        'custom-selectors': { preserve: true }
      }
    }),
    require('cssnano')({ preset: 'default' })
  ],
  sourceMap: true
};
