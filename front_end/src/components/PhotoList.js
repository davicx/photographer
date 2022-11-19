import PhotoCard from './PhotoCard'

const PhotoList = ({ photographers }) => {
  if (photographers.length < 1) {    
    return (
      <div className = "photo-list">
        <p> Your Search </p>
        <p> No results found </p>        
      </div>
      );
  } else {
    return (
      <div className = "photo-list">
        <p> Your Search </p>
        { photographers.map((photographer) => (
           <PhotoCard photographer = { photographer } key={ photographer.id }/>              
        ))}      
      </div>
      );
  }  
}

export default PhotoList;
