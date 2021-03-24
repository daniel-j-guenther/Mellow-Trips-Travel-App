import { runValidator } from '../src/client/js/validator'

describe("::: Testing IIFE runValidator() function :::", ()=>{

    test("TEST FOR VALID WEB ADDRESS:", ()=>{
        const validURL = 'https://asana.com/resources/marketing-plan'
        expect(runValidator(validURL)).toBe("VALIDATION SUCCESS!")
    }),
    test("TEST FOR INVALID WEB ADDRESS:", () => {
        const invalidURL = 'student@asana.com'
        expect(runValidator(invalidURL)).toBe("VALIDATION FAILURE!")
    })

})