class homePage{
    visit() {
        return cy.visit('/', {
           //Add this method because my navigator open in spanish
            onBeforeLoad(win) {
                Object.defineProperty(win.navigator, 'language', { value: 'en-AU' });
                Object.defineProperty(win.navigator, 'languages', { value: ['en'] });
                Object.defineProperty(win.navigator, 'accept_languages', { value: ['en'] });
            },
            headers: {
                'Accept-Language': 'en-AU',
            },
        });
     }
     logo() {
        return cy.get('#hplogo').find('img').eq(1)
     }
     labelLanguage(){
        
     }
     linkLanguage() {
        return cy.get('#SIvCob > a')
     }
     share() {
        return cy.get('.fJOQGe')
     }
     gmail() {
        return cy.get('a.gb_g').eq(0)
     }
     images() {
        return cy.get('a.gb_g').eq(1)
     }
     signIn() {
        return cy.get('#gb_70')
     }
     googleApps() {
        return cy.get('.gb_D')
     }
     
}
export default homePage