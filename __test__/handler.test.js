import { runHandler } from '../src/client/js/handler'

describe("::: Testing IIFE runHandler() function :::", () => {

    test("TEST FOR BASIC ATTRIBUTE", () => {
        expect(runHandler).toBeDefined()
    })

})
