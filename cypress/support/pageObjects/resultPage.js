import searchPage from "./searchPage"

class resultPage extends searchPage{ 

     titleResult(){
          return cy.get('.LC20lb > span')
     }

     search(value){
         super.inputSearch().should('have.value', value)
     }

}
export default resultPage
