import searchPage from "./searchPage"

class resultPage extends searchPage{ 

     titleResult(){
          return cy.get('h3').find('span')
     }

     search(value){
         super.inputSearch().should('have.value', value)
     }

}
export default resultPage
