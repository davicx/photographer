const { json } = require('express/lib/response');
const fs = require('fs');

//FUNCTIONS A: Data Functions  
//Function A.1: Filter Array based on zipcode and event type
function filterPhotographers(photographerData, zipcode, eventType) {
	const filteredPhotographers = photographerData.filter(function(photographer) {
		if(photographer['address'].zip_code == zipcode && photographer['event_type'].type.includes(eventType)) {
			return true
		}
	})
	return filteredPhotographers
}

//FUNCTIONS B: JSON Handling 
//Function B.1: Load JSON data 
async function loadJSON(filename) {
    var jsonData = {
        error: true
    }

	if(fs.existsSync(filename)) {
        jsonData.data = JSON.parse(fs.readFileSync(filename).toString())
        jsonData.error = false;
        return jsonData;
	} else {
        jsonData.data = {error: "error loading data"}
        return jsonData;
	}
}

module.exports = { loadJSON, filterPhotographers}