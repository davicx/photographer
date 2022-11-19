import axios from 'axios'

async function getPhotographers(zipCode, eventType) { 
    const photographerURL = 'http://localhost:3003/api/photographers/' + zipCode + '/' + eventType + '/';  
    const { data } = await axios.get(photographerURL)
    return data
} 

export default getPhotographers;