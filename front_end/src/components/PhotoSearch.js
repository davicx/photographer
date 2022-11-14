import React, { useState } from 'react'
import { useQuery } from "react-query";
import axios from 'axios'

import PhotoList from './PhotoList';

async function getPhotographers(zipCode, eventType) { 
  const photographerURL = 'http://localhost:3003/api/photographers/' + zipCode + '/' + eventType + '/';  
  const { data } = await axios.get(photographerURL)
  return data
} 

const PhotoSearch = () => {
  const [zipcode, setZipcode] = useState('71586');
  const [eventType, setEventType] = useState('wedding');

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
      refetch();
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
            <input name= "zipcode" className="input-search" type="text" value={ zipcode } onChange={handleChange} />
            <input name= "eventType" className="input-search" type="text" value={ eventType } onChange={handleChange} />
            <button type="submit" className="button-submit" > Get Photographers </button>
        </form>
        { data && <PhotoList photographers = { data } />}
      </div>
      );
}

export default PhotoSearch;
