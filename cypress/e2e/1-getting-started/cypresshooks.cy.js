/// <reference types="Cypress" />
describe('Cypress Hooks(Before,Before Each,After,After Each) and Sessions',()=>{
    before(()=>{
        cy.log('execute before hook')
    })
    beforeEach(()=>{
        cy.session('Login',()=>{
            cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
            cy.get('[name="username"]').type('Admin')
            cy.get('[name="password"]').type('admin123')
            cy.contains('button','Login').click()

        })
        
    })
    it('Our first block',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Admin').click() // click admin button
           
    })
    it('Our second block',()=>{
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.contains('Dashboard').click()   // click dashboard button
    })
    after(()=>{
        cy.log('execute after hook')
    })
    afterEach(()=>{
        cy.log('execute after each hook')
    })
})