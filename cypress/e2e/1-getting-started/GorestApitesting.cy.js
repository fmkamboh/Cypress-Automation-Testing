/// <reference types='cypress' />
// import 'cypress-plugin-api'
describe('GET,POST.PUT AND DELETE Request without API plugin',() =>{
    it('Post Request',()=>{
        cy.request({
            method: "POST",
            url: "https://gorest.co.in/public/v2/users",
            headers:{     // header sction is used if any type of authorization is used in your api
                "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            },
            body:{
                "name": "Test11",  
                "email": "test11@gmail.com", 
                "gender": "male",
                "status": "Active"
            }
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(201)
            //expect(resp.body.name).to.equal("Test11")  // to check the name is equal to post data name
        })
    })

    it.only('Get Request',() =>{
        cy.request({
            method:'GET',
            url: "https://gorest.co.in/public/v2/users",
            headers:{
                "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            }
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(200)
        })
    })
    it('Put Request',()=>{
        cy.request({
            method: "PUT",
            url: "https://gorest.co.in/public/v2/users/5970268",
            headers:{
                "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            },
            body:{
                "name": "Faisal",  
                "email": "fmkamboh27@gmail.com", 
                "gender": "male",
                "status": "Active"
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
            url: "https://gorest.co.in/public/v2/users/5970279",
            headers:{
                "authorization": "Bearer 6258116d3ed0af603a78bc19df03db1e4104075f91b9a0a624026d1e9f66f68c"
            }
        })
        .then((resp)=>{
            cy.log(JSON.stringify(resp))
            expect(resp.status).to.equal(204)
        })
    })

})