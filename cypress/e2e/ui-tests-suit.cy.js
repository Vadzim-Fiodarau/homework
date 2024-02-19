/// <reference types = "cypress" />

import { onHomePage } from "../support/page_object/homePage"
import { navigateTo } from "../support/page_object/navigationPage"

describe('Home page', () => {

    beforeEach('Open home page', () => {
        navigateTo.homePage()
    })

    it('1. Get all rhinos with no filter values to retrieve the full set of rhinos in the system.', () => {
        onHomePage.clickGetAllRhinosButton()
        onHomePage.verifyRhinosAmmountInTheSystem()
    })

    //Bug #1
    // Test should faill since we do not see new created Rhino in the table
    it('2. Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros".', () => {
        onHomePage.creatNewRhino('Clyde5000', 'javan_rhinoceros')
        onHomePage.verifyNewCreatedRhinoFromUI('Clyde5000', 'javan_rhinoceros')
    })

    // Working version of the test to skip Bug #1
    it('3. Create a new rhino with the name "Clyde5000" and the species "javan_rhinoceros".', () => {
        onHomePage.creatNewRhino('Clyde5000', 'javan_rhinoceros')
        onHomePage.clickGetAllRhinosButton()
        onHomePage.verifyNewCreatedRhinoFromUI('Clyde5000', 'javan_rhinoceros')
    })

    it('4. Verify by "javan_rhinoceros" filter that newly created rhino is present in the search result.', () => {
        onHomePage.creatNewRhino('Clyde5000', 'javan_rhinoceros')
        onHomePage.verifySpiciesByFilter('Clyde5000', 'javan_rhinoceros')
    })

    it('5. Verify by "indian_rhinoceros" filter that newly created rhino is NOT present in the search result.', () => {
        onHomePage.creatNewRhino('Clyde5000', 'javan_rhinoceros')
        onHomePage.verifySpiciesByFilter('Clyde50000', 'indian_rhinoceros')
    })

})
