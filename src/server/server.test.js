const appEndpoint = require('./server.js')

describe("::: Testing Express server appEndpoint JSON :::", () => {
    
    test("TEST FOR SUBJECTIVITY", () => {
        expect(appEndpoint).toHaveProperty('subjectivity', '')
    }),
    test("TEST FOR CONFIDENCE", () => {
        expect(appEndpoint).toHaveProperty('confidence', '')
    }),
    test("TEST FOR AGREEMENT", () => {
        expect(appEndpoint).toHaveProperty('agreement', '')
    }),
    test("TEST FOR IRONY", () => {
        expect(appEndpoint).toHaveProperty('irony', '')
    }),
    test("TEST FOR SCORE_TAG", () => {
        expect(appEndpoint).toHaveProperty('score_tag', '')
    })

})
