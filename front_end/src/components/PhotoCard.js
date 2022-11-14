const PhotoCard = ({ photographer }) => {
    const photographerEvents = photographer.event_type.type;
    const altImageDescription =  "Image for " + photographer.first_name + " " + photographer.last_name

    return (
        <div className="card">                   
            <div className="avatar">
                <img className="avatar-image" src={photographer.avatar} alt={altImageDescription} />
            </div>
            <p className = "name"> Photgrapher Name: { photographer.first_name } { photographer.last_name }</p>   
            <p className = "location"> Location: { photographer.address.city}, { photographer.address.state}  </p>     
            <div className = "events"> 
                <p className = "italic"> Events: </p>
                <ul className="event-list"> { photographerEvents.map((event, index) => (<li key={index}> { event }  </li> ))} </ul> 
            </div>                       
        </div>
    );
  }
  
export default PhotoCard;
