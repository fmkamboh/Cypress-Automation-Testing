const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'je7gao',
  e2e: {
    "baseUrl":"https://practicetestautomation.com/practice-test-login/", // create a baseUrl for logintest.cy.js
    'specPattern':[  // If you think only those files show in your cypress page then use 'specPattren' for this
      'cypress/e2e/1-getting-started/logintest.cy.js',  // This is a file path
      'cypress/e2e/1-getting-started/APItesting.cy.js',
      'cypress/e2e/1-getting-started/GorestApitesting.cy.js',
      'cypress/e2e/1-getting-started/test01.cy.js',
      'cypress/e2e/1-getting-started/test02.cy.js',
      'cypress/e2e/1-getting-started/iframeTest.cy.js',
      'cypress/e2e/1-getting-started/cypresshooks.cy.js',
      'cypress/e2e/1-getting-started/API-plugin.cy.js',
      'cypress/e2e/1-getting-started/Within-and-contains-elements.cy.js',
      'cypress/e2e/1-getting-started/Parent-child-find-selector-methods.cy.js'
    ],
    'env':{   // This is environment variable
      'username':'student',
      'password':'Password123'

    },

    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    "video" : true,
    'viewportWidth':1660,
    'viewportHeight':960
  },
});
