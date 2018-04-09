const { injectBabelPlugin, getLoader } = require('react-app-rewired')

// use react-app-rewired to override the default config of create-react-app
// https://github.com/timarney/react-app-rewired
module.exports = function override(config, env) {
  //demand loading for antd
  config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', libraryDirectory: 'es', style: 'css' }], config)

  //add sass support
  const cssLoader = getLoader(
    config.module.rules,
    rule => rule.test && String(rule.test) === String(/\.css$/)
  );

  const sassLoader = {
    test: /\.scss$/,
    use: [...(cssLoader.loader || cssLoader.use), 'sass-loader']
  };

  const oneOf = config.module.rules.find(rule => rule.oneOf).oneOf;
  oneOf.unshift(sassLoader);

  return config
}
