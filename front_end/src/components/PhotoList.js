import PhotoCard from './PhotoCard'

const PhotoList = ({ photographers }) => {
  return (
    <div className = "photo-list">
      { photographers.map((photographer) => (
         <PhotoCard photographer = { photographer } key={ photographer.id }/>              
      ))}      
    </div>
    );
}

export default PhotoList;
