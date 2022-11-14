import React, { useState } from 'react'
import { useQuery } from "react-query";
import axios from 'axios'
import { sum } from '../functions/HelperFunctions'

import PhotoList from './PhotoList';

async function getPhotographers(zipCode, eventType) { 
  const photographerURL = 'http://localhost:3003/api/photographers/' + zipCode + '/' + eventType + '/';  
  const { data } = await axios.get(photographerURL)
  return data
} 

const PhotoSearch = () => {
  const [zipcode, setZipcode] = useState('71586');
  const [eventType, setEventType] = useState('wedding');
  const [eventTypeError, setEventTypeError] = useState(false);
  const [zipcodeError, setZipcodeError] = useState(false);

  const { isLoading, data, isError, error, refetch } = useQuery(
    ['photographers'], 
    () => getPhotographers(zipcode, eventType), 
    {  enabled: false }
  )

  const handleChange = (event) => {
    const { name, value } = event.target
    if(name === "zipcode") {
      setZipcode(value)
    } else if (name === "eventType") {
      setEventType(value)
    } 
    console.log(sum(2,2))
  }

  const handleSubmit = (event) => {
      event.preventDefault();
      let validZipcode = false;
      let validEventType = false;

      //Validate Event Type  
      if(eventType.length > 2 && eventType.length <= 32) {
        validEventType = true;
      }

      //Validate Zipcode 
      let validZipcodeFormat = /(^\d{5}$)|(^\d{5}-\d{4}$)/.test(zipcode);
      if(zipcode.length > 4 && zipcode.length <= 12 && validZipcodeFormat === true) {
        validZipcode = true;
      }     

      //Handle Form Submit and Update
      if(validZipcode === true && validEventType === true ) {
        setEventTypeError(false)
        setZipcodeError(false)
        refetch();
      } else {
        if(validZipcode === false) {
          setZipcodeError(true)
        }
        if(validEventType === false) {
          setEventTypeError(true)
        }
      }      
  }

  if (isLoading) {
    return <h4>Loading...</h4>;
  }

  if (isError) {
    return <h4> There was an error { error.message }</h4>;
  }

  return (
      <div className = "search">
          <form onSubmit={ handleSubmit }>
            <input name= "zipcode" className="input-search" type="text" value={ zipcode } maxLength="12" onChange={handleChange} />
            { zipcodeError && <p> Please enter a valid zipcode similar to this format: 74122 or 74122-6304 </p> }
            <input name= "eventType" className="input-search" type="text" value={ eventType } maxLength="31" onChange={handleChange} />
            { eventTypeError && <p> Please enter a valid event type between 3 and 30 letters. An example is wedding. </p> }
            <button type="submit" className="button-submit" > Get Photographers </button>
        </form>
        { data && <PhotoList photographers = { data } />}
      </div>
      );
}
 
export default PhotoSearch;
