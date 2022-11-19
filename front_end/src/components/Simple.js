import React from 'react';
import { useQuery } from "react-query";
import axios from 'axios'

import getPhotographers from '../hooks/getPhotographers'
import PhotoList from './PhotoList';

/*
async function getPhotographers(zipCode, eventType) { 
  const photographerURL = 'http://localhost:3003/api/photographers/' + zipCode + '/' + eventType + '/';  
  const { data } = await axios.get(photographerURL)
  return data
} 
*/

const Simple = () => {
  const { isLoading, data, isError, error  } = useQuery(['group-posts'], () => getPhotographers(71586, "wedding"), 
    { refetchInterval: 10000000 }
  )

  const currentPosts = data;
  console.log(isLoading)
  console.log(isError)
  console.log(error)

  return (
  <div className="posts">
       <p> Posts </p>
      { isLoading && <div> loading... </div>}
      { isError && <div> There was an error fetching the posts { error.message } </div>}
      { data && <PhotoList photographers = { data } />}
  </div>
  );
  }
  
export default Simple;

/*
      { data && <IndividualPost posts = { currentPosts } title="The posts!" />}
*/

  

/*

import React, { useState } from 'react'
import { useQuery } from "react-query";
import axios from 'axios'
import { validateEventType, validateZipcode } from '../functions/HelperFunctions'

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
      console.log(zipcode, eventType)
      console.log(validEventType, validZipcode)

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
                <label className = "input-label" for="zipcode">Zipcode:</label>
                <input name= "zipcode" className="input-search" type="text" value={ zipcode } maxLength="12" onChange={handleChange} />
              </div>
              <div className = "search-error-holder"> 
               { zipcodeError && <p className = "error-text"> Please enter a valid zipcode similar to this format: 74122 or 74122-6304 </p> }
              </div>        
            </div>

            <div className = "search-holder">             
              <div className = "search-input-holder"> 
                <label className = "input-label" for="eventType">Event Type:</label>
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
*/