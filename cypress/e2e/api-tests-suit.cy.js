import { onHomePage } from "../support/page_object/homePage"
import { navigateTo } from "../support/page_object/navigationPage"

describe('Home page', () => {

    beforeEach('Open home page', () => {
        navigateTo.homePage()
    })

    it('1. Verify API respond when create new rhino', () => {
        onHomePage.creatNewRhino('Clyde5000', 'javan_rhinoceros')
        onHomePage.verifyNewCreatedRhinoFromApi('Clyde5000', 'javan_rhinoceros')
    })

    it('2. Verify API respond when get all rhinos without filter value', () => {
        onHomePage.clickGetAllRhinosButton()
        onHomePage.verifyRhinosAmountFromApi()
    })
    //Bug #2
    // Test should faill because even if we put incorect value to species filter we still see a respond with status code 200
    it('3.Verify API respond when get rhinos with incorect rhino species filter value', () => {
        onHomePage.typeValueIntoSpeciesFilter('jsjsjsj')
        onHomePage.clickGetAllRhinosButton()
        onHomePage.verifyRhinosStatusCodeWithIncorectValue()

    })

})