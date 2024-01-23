                // This is our custom command file

Cypress.Commands.add('LogIn',()=>{   // LogIn is a variable which is used to call this code in the main file(logintest.cy.js)
        cy.visit('/')  // url is set in the cypress.config.js file and we use '/' insted of url. It is a baseurl
        cy.get('[name="username"]').type(Cypress.env('username'))  // This is a environment variable call from cypress.config.js file
        cy.get('[name="password"]').type(Cypress.env('password'))  // This is a environment variable
        cy.get('[class="btn"]').click()

        //Verify new page URL contains practicetestautomation.com/logged-in-successfully/
        cy.url().should('include', 'practicetestautomation.com/logged-in-successfully/')

        //Verify new page contains expected text ('Congratulations' or 'successfully logged in')
        cy.contains('Logged In Successfully').should('exist')

        //Verify button Log out is displayed on the new page
        cy.get('[class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]').should('be.visible')
        
        //logout button click
        cy.pause()
        cy.get('[class="wp-block-button__link has-text-color has-background has-very-dark-gray-background-color"]').click()
})