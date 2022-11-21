import React, { useState } from 'react'
import { useQuery } from "react-query";
import axios from 'axios'
import { validateEventType, validateZipcode } from '../functions/HelperFunctions'
import getPhotographers from '../hooks/getPhotographers'

import PhotoList from './PhotoList';


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
  }
  
  const handleSubmit = (event) => {
      event.preventDefault();
      let validZipcode = validateZipcode(zipcode);
      let validEventType = validateEventType(eventType);

      //Data is valid 
      if(validZipcode === true && validEventType === true ) {
        setEventTypeError(false)
        setZipcodeError(false)
        refetch();

      //Data is not valid show error labels   
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

            <div className = "search-holder">
              <div className = "search-input-holder"> 
                <label className = "input-label" htmlFor="zipcode">Zipcode:</label>
                <input name= "zipcode" className="input-search" type="text" value={ zipcode } maxLength="12" onChange={handleChange} />
              </div>
              <div className = "search-error-holder"> 
               { zipcodeError && <p className = "error-text"> Please enter a valid zipcode similar to this format: 74122 or 74122-6304 </p> }
              </div>        
            </div>

            <div className = "search-holder">             
              <div className = "search-input-holder"> 
                <label className = "input-label" htmlFor="eventType">Event Type:</label>
                <input name= "eventType" className="input-search" type="text" value={ eventType } maxLength="31" onChange={handleChange} />
              </div>
              <div className = "search-error-holder"> 
                { eventTypeError && <p className = "error-text"> Please enter a valid event type between 3 and 30 letters.</p> }
              </div>  
            </div>

            <button type="submit" title = "searchButton" className="button-submit uk-button uk-button-primary uk-width-1-1 uk-margin-small-bottom" > Get Photographers </button>
        </form>
        { data && <PhotoList photographers = { data } />}
      </div>
      );
}
 
export default PhotoSearch;
