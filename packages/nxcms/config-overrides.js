/* eslint-disable no-param-reassign */
module.exports = (config /* , env */) => {
  // Use custom ESLint config
  delete config.eslint.configFile;
  config.eslint.useEslintrc = true;

  // Add styled-jsx Babel plugin
  const babelrc = config.module.loaders.find(l => l.loader === 'babel').query;
  babelrc.plugins = ['styled-jsx/babel'].concat(babelrc.plugins || []);

  return config;
};
