export class NavigationPage {

    homePage() {
        cy.visit('/')
    }
}

export const navigateTo = new NavigationPage()