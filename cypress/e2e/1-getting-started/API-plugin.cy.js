/// <reference types='Cypress' />
import 'cypress-plugin-api'
describe('Use of APIs Plugin',()=>{
    it.only("GET API testing Using Cypress API Plugin", () => { // This API without Token authentication
        cy.api("GET","https://jsonplaceholder.typicode.com/users").should((response)=>{
            expect(response.status).to.equal(200)
        })
    })

    it("POST API testing Using Cypress API Plugin", () => {
        cy.api({       // This API with Token authentication
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
              "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            },
            body: {
              "name": "Testing113",
              "email": "testing113@gmail.com",
              "gender": "male",
              "status": "Active"
            }
          }).should((response) => {
            expect(response.status).to.equal(201)
          })
    })

    it.only("GET API testing Using Cypress API Plugin", () => {
        cy.api({
            method: "GET",
            url: "https://gorest.co.in/public/v2/users",
            headers: {
              "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            },
        }).should((response)=>{
            expect(response.status).to.equal(200)
        })
    })
    
    it("PUT API testing Using Cypress API Plugin", () => {
        cy.api({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/6064825",
            headers: {
              "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            },
            body: {
              "name": "Testing12",
              "email": "testing113@gmail.com",
              "gender": "male",
              "status": "InActive"
            }
          }).should((response) => {
            expect(response.status).to.equal(200)
          })
    })
    
    it('DELETE API testing Using Cypress API Plugin',()=>{
        cy.request({
            method: "DELETE",
            url: "https://gorest.co.in/public/v2/users/6064581",
            headers:{
                "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            }
        }).should((response) => {
            expect(response.status).to.equal(204)
          })
    }) 
     
})