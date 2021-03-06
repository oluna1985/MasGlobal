/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */
// cypress/plugins/index.js
// cypress/plugins/index.js
module.exports = (on, config) => {
  //Add this configuration because my navigator open in spanish when redirect to the other page
  on('before:browser:launch', (browser, launchOptions) => {
    if (browser.family === 'chromium' && browser.name !== 'electron') {
      launchOptions.preferences.default.intl = { accept_languages: "en-AU" }
      return launchOptions
    }
  })
};
