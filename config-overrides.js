const { injectBabelPlugin } = require('react-app-rewired')
const rewireStyledComponents = require('react-app-rewire-styled-components')

/**
 * react-app-rewired config
 *
 * @see https://github.com/timarney/react-app-rewired
 *
 * @param {Object} config
 * @param {string} env
 */
module.exports = function override(config, env) {
  const isProduction = env === 'production'

  if (isProduction) {
    config.module.rules.splice(0, 1)
  }
  if (!isProduction) {
    config = rewireStyledComponents(config, env)
  }

  return config
}
