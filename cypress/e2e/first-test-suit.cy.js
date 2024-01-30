/// <reference types="cypress" />

import { rhinos } from "../support/page_object/actionsWithRhinos"

describe('Homework', () => {

    beforeEach('open the application', () => {
        cy.openHomePage()
    })

    it('get all rhinos with no filter value and verify full set of rhinos in the system', () => {
        rhinos.getAllRhinosWithNoFilterValue()
        rhinos.verifyFullSetOfRhinosInSystem()
    })

    it('Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros".', () => {
        rhinos.createNewRhinos('Clyde5000', 'javan_rhinoceros')
    })

    it('Verify by "javan_rhinoceros" filter that newly created rhino is present in the search result.', () => {
        rhinos.createNewRhinos('Clyde5000', 'javan_rhinoceros')
        rhinos.verifySpiciesByFilter('Clyde5000', 'javan_rhinoceros')
    })

    it('Verify by "indian_rhinoceros" filter that newly created rhino is NOT present in the search result.', () => {
        rhinos.createNewRhinos('Clyde5000', 'javan_rhinoceros')
        rhinos.verifySpiciesByFilter('Clyde5000', 'indian_rhinoceros')
    })

})
