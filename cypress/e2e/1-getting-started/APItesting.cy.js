/// <reference types="cypress" />
// import 'cypress-plugin-api'
describe("GET,POST,UPDATE and DELETE Resquest without API plugin",()=>{
    it('Get Request',()=>{
        cy.request({
            method: "GET",
            url: "https://jsonplaceholder.typicode.com/users"
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(200)
        })
    })
    it('Post Request',()=>{
        cy.request({
            method: "POST",
            url: "https://jsonplaceholder.typicode.com/users",
            body:{
                "name": "Faisal Mehmood",
                "username": "fmkamboh",
                "email": "faisalmehmood668@gmail.com",
                "address": {
                   "street": "63A Din Muhammad Market Revenu Socity",
                   "suite": "Johar Town",
                   "city": "Lahore",
                   "zipcode": "54000",
                   "geo": {
                    "lat": "-37.315",
                    "lng": "81.149"
                    }
               },
               "phone": "0303-9234365",
               "website": "teknohus.org",
               "company": {
                "name": "Teknohus"
                  }
               }
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(201,202)
        })
    })
    it('Put Request',()=>{
        cy.request({
            method: "PUT",
            url: "https://jsonplaceholder.typicode.com/users/1",
            body:{
                "name": "FaisalMehmood",
                "username": "fmkamboh482",
                "phone": "0327-8874538"
            }
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(200)
        })
    })
    it('Delete Request',()=>{
        cy.request({
            method: "DELETE",
            url: "https://jsonplaceholder.typicode.com/users/1"
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(200)
        })
    })

    
})