const functions = require('../utils/util-functions');
const constants = require('../utils/constants');

//Controller A1: Get Photographers input: zipcode and event type output: list of photographers
async function getPhotographers(req, res) {
	const photographerData = await functions.loadJSON(constants.DATABASE_FILE)

	if(photographerData.error == true) {
		res.status(500).send('Could not get the data')
	}

	res.json({photographerData: photographerData.data})

}

//Controller A2: Get a list of photographers that match critera 
async function getFilteredPhotographers(req, res) {
	const zipcode = req.params.zipcode;
	const eventType = req.params.event;
	
	const photographerData = await functions.loadJSON(constants.DATABASE_FILE);
	const filteredPhotographers = functions.filterPhotographers(photographerData.data, zipcode, eventType);

	if(photographerData.error == true) {
		res.status(500).send('Sorry, we are unable to get the photographer data right now')
	}

	res.json(filteredPhotographers);

}

module.exports = { getPhotographers, getFilteredPhotographers };