/// <reference types='Cypress' />
describe('Parent,Child and Find selector methos',()=>{
    it('Parent,Child and Find Method',()=>{
        cy.visit('https://demo.seleniumeasy.com/table-search-filter-demo.html')
        cy.get('[id="task-table"]').find('th').first().next()
        /*
        .children()
        .first()
        .children()
        .first().children().first().next().nextAll().parent()
        */
       /*
       .children()
       .first()
       //.next()
       //.parent()
       .siblings()*/

    })
})