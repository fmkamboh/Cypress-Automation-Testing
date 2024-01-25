/// <reference types='Cypress' />
describe('Within and Contains menthod',()=>{
    it('element access',()=>{
        cy.visit('https://demo.seleniumeasy.com/basic-first-form-demo.html')
        cy.get('[id="get-input"]').within(()=>{ // within funtion is used to the form only 
            cy.get('[type="text"]').type('Welcome To Automation Testing')
            cy.contains('button','Show Message').click()  // Contains method is mostly used to Button click
        })

        cy.get('[name="sum1"]').type('25')
        cy.get('[name="sum2"]').type(50)
        cy.contains('button','Get Total').click()
       
        //cy.get('[type="text"]').type('Welcome TomAutomation Testing')

    })
})