export class ActionsWithRhinos {

   getAllRhinosWithNoFilterValue() {
      cy.contains('button', 'Get all Rhinos').click()
   }

   verifyFullSetOfRhinosInSystem() {
      cy.intercept('GET', 'http://localhost:4000/rhinoceros?').as('getRhinos')
      cy.contains('button', 'Get all Rhinos').click()
      cy.wait('@getRhinos')
      cy.get('@getRhinos').then(xhr => {
         cy.get('.rhino-table-body').then(ammountOfRhinos => {
            const ammountOfRhinosOnPage = ammountOfRhinos.children().length
            expect(xhr.response.body.rhinoceroses.length).to.equal(ammountOfRhinosOnPage)
         })
      })
   }

   createNewRhinos(name, species) {
      cy.intercept('POST', 'http://localhost:4000/rhinoceros').as('createRhinos')
      cy.get('#create_rhino_name').type(name)
      cy.get('#create_rhino_species').type(species)
      cy.contains('button', 'Create Rhino').click()
      cy.wait('@createRhinos')
      cy.get('@createRhinos').then(xhr => {
         expect(xhr.response.body.name).to.equal(name)
         expect(xhr.response.body.species).to.equal(species)
      })
      cy.contains('button', 'Get all Rhinos').click()
   }

   verifySpiciesByFilter(name, species) {

      cy.get('@createRhinos').then(xhr => {
         const rhinoSpecie = xhr.response.body.species
         cy.wrap(rhinoSpecie).then(rhinoSpecie => {
            cy.contains('form', 'Get All Rhinos').find('[id="create_rhino_species"]').type(species)
            cy.contains('form', 'Get All Rhinos').find('button').click()
            cy.get('tbody').then(tbody => {
               if (species == rhinoSpecie) {
                  cy.wrap(tbody).should('contain', name)
               } else {
                  cy.wrap(tbody).should('not.contain', name)
               }
            })
         })
      })
   }
}

export const rhinos = new ActionsWithRhinos()