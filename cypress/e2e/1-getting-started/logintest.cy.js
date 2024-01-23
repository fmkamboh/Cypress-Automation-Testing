/// <reference types="Cypress" />
describe('LogIn Test',()=>{
    it('login',()=>{
        cy.LogIn() // this line to call loginCommand.js file because we create a custom commands file. in this file we fetch all of login data 
    })
})