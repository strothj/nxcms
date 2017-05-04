const rewireEslint = require('react-app-rewire-eslint');

module.exports = (config, env) => {
  config = rewireEslint(config, env);
  return config;
};
