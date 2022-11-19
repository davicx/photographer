const functions = require('../../app/utils/util-functions');
const constants = require('../../app/utils/constants');

//TO DO: Need to add tests for edge cases and failures and have standardized test data loaded 
describe('FUNCTIONS: Test Utilty Functions', () => {
    describe('Test Functions A: Data Functions', () => {
     test('Should filter for photographer with the ID 4517', async () => {
			const photographerData = await functions.loadJSON(constants.MOCK_DATABASE_FILE);
			const zipcode = 82215;
			const eventType = "birthdays";			
			const photographer = functions.filterPhotographers(photographerData.data, zipcode, eventType);
			expect(photographer[0].id).toBe(4517);
		});
    })

    describe('Test Functions B: JSON Handling', () => {
		test('Should return a photographer array with length 30', async () => {
			   const photographerData = await functions.loadJSON(constants.MOCK_DATABASE_FILE);
			   expect(photographerData.data.length).toBe(30);
		   });
	   })

	describe('Test FUNCTIONS C: Data Validation', () => {
		test('Should return true for valid zipcode ', () => {
			const validZipcode = functions.validateZipcode("97311");
			expect(validZipcode).toBe(true);
		   });
		test('Should return false for invalid zipcode ', async () => {
			const validZipcode = functions.validateZipcode("11")
			expect(validZipcode).toBe(false); 
		});
		test('Should return true for valid string ', async () => {
			const validateString = functions.validateStringSmall("wedding")
			expect(validateString).toBe(true);
		   });
		test('Should return false for invalid string ', async () => {
			const validateString = functions.validateStringSmall("we")
			expect(validateString).toBe(false);
		});
	})
})
