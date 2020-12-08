const searchPage = require('../pageObjects/searchPage')
const search = new searchPage()
const resultSearch = require('../pageObjects/resultPage')
const result = new resultSearch()

/*Count results suggestion*/
function countResults() {
    search.suggestionsResult().then($el => {
        cy.expect($el.length).to.be.eq(10)
    })
}

/*Go to search*/
function searching(value) {
    search.goToSearch()
    search.searchButton().should('be.visible').should('have.value', 'Google Search') // validate visible and text button
    search.felingButton().should('be.visible').should('have.value', "I'm Feeling Lucky") // validate visible and text button
    search.inputSearch().should('have.value', '') //inputs is emtpy
    search.inputSearch().wait(1000).click()
    search.inputSearch().type(value) // enter a value in input
}

/*Verify initial page*/
Cypress.Commands.add('searchPage', () => {
    //go to page search google
    search.goToSearch()
    search.home()
    cy.url().should('eq', Cypress.config('baseUrl') + '/')

})

/*Verify search and search
@param value: value to searched
*/
Cypress.Commands.add('search', (value, suggestion) => {
    searching(value) //go to page search google
    cy.url().should('eq', Cypress.config('baseUrl') + '/')
    countResults() // count results of suggestions
    if (suggestion) {
        search.suggestionsResult().first().click() //click on button search in container result
        cy.url().should('have.contain', value.replace(/\s+/g, "+")) //Verify if value have in the url
    } else {
        search.searchButtonContain()
            .wait(1000)
            .should('have.value', 'Google Search')
            .scrollIntoView({ offset: { top: 150, left: 0 } })
            .should('be.visible').click() //click on button search in container result
        result.search(value) // validate content of input is the same to searched
    }
    result.titleResult().wait(1000).first().click() // Click on of the first result
    cy.url().should('not.eq', Cypress.config('baseUrl') + '/')
})

/*Verify search can clean after input value
@param value: value to searched
*/
Cypress.Commands.add('cleanSearch', (value) => {
    searching(value)
    search.remove()
    search.inputSearch().should('have.value', '')
})