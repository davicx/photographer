//Validate Zipcode 
export const validateZipcode = (zipcode) => {
    let validZipcodeFormat = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
    if(zipcode.length > 4 && zipcode.length <= 12 && validZipcodeFormat === true) {
        return true;
    } else {
        return false;
    }
}

//Validate Event Type 
export const validateEventType = (eventType) => { 
    if(eventType.length > 2 && eventType.length <= 32) {
       return true;
    } else {
        return false;
    }
}