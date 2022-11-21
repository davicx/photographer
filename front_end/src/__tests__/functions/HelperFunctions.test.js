import { validateZipcode, validateEventType } from '../../functions/HelperFunctions'

describe('FUNCTIONS: Check Helper Functions', () => {
    it("Validates incorrect zipcode", () => {
        expect(validateZipcode(223)).toEqual(false);
        expect(validateZipcode("hi")).toEqual(false);
        expect(validateZipcode(4444444-44)).toEqual(false);
    })
    it("Validates correct zipcode", () => {
        expect(validateZipcode(97330)).toEqual(false);
    })
    it("Validates incorrect event type", () => {
        expect(validateEventType("I")).toEqual(false);
    })
    it("Validates correct event type", () => {
        expect(validateEventType("wedding")).toEqual(true);
        expect(validateEventType("sports")).toEqual(true);
    })   
})
