module.exports = function override(config, env) {
  console.log('env', env);

  const configOverride = config;

  delete configOverride.node;
  configOverride.target = 'electron-renderer';
  return configOverride;
};
