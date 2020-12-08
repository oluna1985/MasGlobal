/*Automation Project - Google Homepage Search*/
describe('test_suite_google_search', ()=>{
     it('01-Search page Google', ()=>{
        cy.searchPage()
     })
     
     it('02-Clear search ', ()=>{
      cy.cleanSearch('The name of the wind')
     })

     it('03-Search with Google search', ()=>{
      cy.search('The name of the wind', false)
     })

     it('04-Search by using the suggestions', ()=>{
      cy.search('The name of the w', true)
     })
})