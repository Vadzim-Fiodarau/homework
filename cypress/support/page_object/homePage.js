beforeEach(() => {
   cy.intercept('GET', 'http://localhost:4000/rhinoceros?').as('getRhinos')
   cy.intercept('POST', 'http://localhost:4000/rhinoceros').as('createRhinos');
});

export class HomePage {

   typeValueIntoSpeciesFilter(rhinoSpecies) {
      cy.contains('form', 'Get All Rhinos')
         .find('[id="create_rhino_species"]')
         .type(rhinoSpecies)
   }

   clickGetAllRhinosButton() {
      cy.contains('button', 'Get all Rhinos').click()
   }

   clickCreateRhinoButton() {
      cy.contains('button', 'Create Rhino').click()
   }

   creatNewRhino(rhinoName, rhinoSpecies) {
      cy.get('#create_rhino_name').type(rhinoName)
      cy.get('#create_rhino_species').type(rhinoSpecies)
      this.clickCreateRhinoButton()
   }

   verifyRhinosAmmountInTheSystem() {
      this.clickGetAllRhinosButton()
      this.verifyRhinosAmountFromApi()
   }

   verifySpiciesByFilter(rhinoName, rhinoSpecies) {
      cy.wait('@createRhinos').then(xhr => {
         const rhinoSpeciesFromApi = xhr.response.body.species
         cy.wrap(rhinoSpeciesFromApi).then(rhinoSpeciesFromApi => {
            this.typeValueIntoSpeciesFilter(rhinoSpecies)
            this.clickGetAllRhinosButton()
            cy.get('tbody').then(tbody => {
               if (rhinoSpecies == rhinoSpeciesFromApi) {
                  cy.wrap(tbody).should('contain', rhinoName)
               } else {
                  cy.wrap(tbody).should('not.contain', rhinoName)
               }
            })
         })
      })
   }

   verifyNewCreatedRhinoFromApi(rhinoName, rhinoSpecies) {
      cy.wait('@createRhinos').then(xhr => {
         expect(xhr.response.body.name).to.equal(rhinoName)
         expect(xhr.response.body.species).to.equal(rhinoSpecies)
         expect(xhr.response.statusCode).to.equal(200)
      })
   }

   verifyRhinosAmountFromApi() {
      cy.wait('@getRhinos').then(xhr => {
         cy.get('.rhino-table-body').then(ammountOfRhinos => {
            const ammountOfRhinosOnPage = ammountOfRhinos.children().length
            const ammountOfRhinosFromApi = xhr.response.body.rhinoceroses.length
            expect(ammountOfRhinosFromApi).to.equal(ammountOfRhinosOnPage)
            expect(xhr.response.statusCode).to.equal(200)
         })
      })
   }

   verifyNewCreatedRhinoFromUI(rhinoName, rhinoSpecies) {
      cy.get('.rhino-table-body')
         .should('contain', rhinoName)
         .and('contain', rhinoSpecies)
   }
   verifyRhinosStatusCodeWithIncorectValue(){
      cy.wait('@getRhinos').then(xhr => {
         expect(xhr.response.statusCode).to.equal(400)
      })
   }

}

export const onHomePage = new HomePage()