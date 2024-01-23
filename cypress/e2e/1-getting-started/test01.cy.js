/// <reference types="cypress" />

// To import this line for upload image or file and install "npm install --save-dev cypress-file-upload" this line in the terminal 
// import 'cypress-file-upload';    we import this line in e2e.js file because we do not needs this line import every upload file
describe("Welcome to Automation Testing Teknohus", () =>{
  it("Visit the website",() =>{
      cy.visit("https://www.teknohus.com/");
              // test cases for contact us form
      //cy.viewport(1440, 900);  // this line is to fixed the screen width and height if we need by default screen width and height then  we right height and width in cypress.cofig.js file
      cy.get('[name="your-name"]').eq(0).type("Faisal");    
      cy.get('[name="LastName"]').eq(0).type("Mehmood"); 
      cy.get('[name="your-email"]').eq(0).type("faisalmehmood668@gmail.com");
      /*
            // Two way we use upload a file one cy.fixture function and second is simple one line command see as below 
            // In this method we create a another folder in fixture folder and add our file and image etc. in this folder
      cy.fixture('fixtures/Faisal.jpg', 'base64').then(fileContent => {
        // Get the file input element and attach the image file
        cy.get('[class="wpcf7-form-control wpcf7-file"]').attachFile({
          fileContent,
          fileName: 'Faisal.jpg',
          mimeType: 'image/jpg',
      });
      }); 
      */
     // This is a second method to upload a file. In this method add our file in fixture folder
      cy.get('[class="wpcf7-form-control wpcf7-file"]').eq(0).attachFile('Faisal.jpg')

      cy.get('[placeholder="Message"]').eq(0).type("Welcome To Automation Testing Teknohus");
      // There are two way to click a button if multiple elements are used in class or id first method to use of eq(0) function 
      cy.get('[class="wpcf7-form-control has-spinner wpcf7-submit"]').eq(0).click({ force: true });
      /*  In the second method to use of .each() function if use not both funcion then we make xpath and use this
      cy.get('[class="wpcf7-form-control has-spinner wpcf7-submit"]').each(($element) =>{
        cy.wrap($element).click({ force: true }); }); 
      */
      
  });
});
