/// <reference types="cypress" />

import testobjects from "../../Pageobjects/testPageObjects";
const testobject= new testobjects();
describe("Welcome to Automation Testing Xevensolutions", () =>{
    it("Visit the website",() =>{
        cy.visit("https://www.xevensolutions.com/");
        cy.pause()
        cy.get('[class="paoc-popup-margin paoc-popup-mheading"]').should('be.visible')   // use of assertions to popup text is visible
        cy.get('[class="paoc-close-popup paoc-popup-close"]').eq(0).click();   // popup close function
        cy.get(testobject.logo).should('be.visible')   // uses of page object model and use of assertions
        //cy.get(logoobject.logo).eq(1).click()
        cy.get('[class="elementor-button elementor-button-link elementor-size-sm"]').eq(0).click();
        cy.contains('Contact Us').should('exist')  // to check Contact us word is exist or not
        cy.get('[data-id="2bc8233"]').should('be.visible')   // to check it is a contact us form
        cy.get('[id="industries"]').select("Computer Vision");
        cy.get('[id="your-industries"]').select("Information Technology");
        cy.get(testobject.firstname).type("Faisal");  // uses of page object model
        cy.get(testobject.lastname).type("Mehmood");
        cy.get('[name="your-email"]').eq(0).type("faisalmehmood668@gmail.com");
        cy.get('[name="phone"]').type("03278874538");
        cy.get('[name="country"]').type("Pakistan");
        cy.get('[name="company"]').type("Teknohus LLC Technology Lahore");
        cy.get('[data-name="your-message"]').type("Welcome To Automation Testing");
        cy.get('[type="checkbox"]').eq(0).check();
        cy.get('[type="checkbox"]').eq(1).check();
        cy.pause();
        cy.get('[type="submit"]').eq(0).click({force: true});




    });
});