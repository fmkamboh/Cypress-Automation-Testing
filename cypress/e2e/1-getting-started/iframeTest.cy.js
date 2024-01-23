/// <reference types="Cypress" />
  // we access IFrame different three way like see below
describe('How we access Iframe',()=>{
    it.skip('Ifreame Test First way',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('[id="frame"]')
        .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap).find('[class="glyphicon glyphicon-chevron-right"]').click()
       // cy.get('[class="glyphicon glyphicon-chevron-right"]').click()

    })
    it.skip('Ifreame Test Second way',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('[id="frame"]')
        .its('0.contentDocument.body').should('be.visible')
        .then(cy.wrap)
        .within(()=>{
            cy.get('[class="glyphicon glyphicon-chevron-right"]').click()

        })
       // cy.get('[class="glyphicon glyphicon-chevron-right"]').click()

    })
    it('Ifreame Test Third way',()=>{
        cy.visit('https://webdriveruniversity.com/IFrame/index.html')
        cy.get('[id="frame"]').then(($iframe)=>{
            const $body=$iframe.contents().find('body')
            cy.wrap($body).should('be.visible')
            cy.wrap($body).find('[class="glyphicon glyphicon-chevron-right"]').click()
        })

        })
       // cy.get('[class="glyphicon glyphicon-chevron-right"]').click()

})