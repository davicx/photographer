const functions = require('../../app/utils/util-functions');

//TO DO: Need to add tests for edge cases and failures and have standardized test data loaded 
describe('Test Utilty Functions', () => {
    describe('Test Functions A: Data Functions', () => {
     test('Should filter for photographer with the ID 4517', async () => {
			const photographerData = await functions.loadJSON('./app/models/photographers.json');
			const zipcode = 82215;
			const eventType = "birthdays";			
			const photographer = functions.filterPhotographers(photographerData.data, zipcode, eventType);
			expect(photographer[0].id).toBe(4517);
		});
    })
    describe('Test Functions B: JSON Handling', () => {
		test('Should return a photgrapher array with length 30', async () => {
			   const photographerData = await functions.loadJSON('./app/models/photographers.json');
			   expect(photographerData.data.length).toBe(30);
		   });
	   })
})
