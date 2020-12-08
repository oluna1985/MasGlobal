import homePage from "./homePage"

class searchPage extends homePage {

    inputSearch() {
        return cy.get('input[type=text]')
    }
    searchButton() {
        return cy.get('input[type=submit]').eq(2)
    }
    searchButtonContain() {
        return cy.get('input[type=submit]').eq(0)
    }
    felingButton() {
        return cy.get('input[type=submit]').eq(3)
    }
    suggestionsResult() {
        return cy.get('ul li')
    }
    remove(){
        cy.get('.lBbtTb > svg').click()
    }
    goToSearch() {
        super.visit()
    }
    home() {
        super.logo().should('be.visible')
        super.gmail().should('be.visible').should('have.text', 'Gmail')
        super.images().should('be.visible').should('have.text', 'Images')
        super.googleApps().should('be.visible')
        super.signIn().should('be.visible').should('have.text', 'Sign in')
    }

}
export default searchPage