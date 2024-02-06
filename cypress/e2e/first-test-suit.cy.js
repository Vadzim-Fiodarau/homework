/// <reference types="cypress" />

import { onHomePage, rhinos } from "../support/page_object/actionsWithRhinos"

describe('Home page', () => {

    beforeEach('Open home page', () => {
        navigateTo.HomePage();
        
    })

    it('1. Get all rhinos with no filter values to retrieve the full set of rhinos in the system.', () => {
        // onHomePage.clickGetAllRhinosButton()
        // onHomePage.verifyRhinosAmmount()
        rhinos.getAllRhinosWithNoFilterValue()
        rhinos.verifyFullSetOfRhinosInSystem()
    })

    it('Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros".', () => {
        rhinos.createNewRhinos('Clyde5000', 'javan_rhinoceros')
        createRhino
    })

    // Working version of the test to skip Bug #3
    it('Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros".', () => {
        onHomePage.createRhino('Clyde5000', 'javan_rhinoceros')
        onHomePage.reloadPageToSeeRhinos()
        onHomePage.verifyRhinoIsInTable('Clyde5000', 'javan_rhinoceros')
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
