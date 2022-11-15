const PhotoCard = ({ photographer }) => {
    const photographerEvents = photographer.event_type.type;
    const altImageDescription =  "Image for " + photographer.first_name + " " + photographer.last_name

    return (
        <div className="card">                   
            <div className="avatar">
                <img className="avatar-image" src={photographer.avatar} alt={altImageDescription} />
            </div>
            <div className = "name"> 
                <p className = "text-card"> Photographer Name: { photographer.first_name } { photographer.last_name }</p>
            </div>
            <div className = "location">
                <p className = "text-card"> Location: { photographer.address.city}, { photographer.address.state}  </p>
            </div> 

            <div className = "events"> 
                <ul className="event-list"> <b> Events: </b> { photographerEvents.map((event, index) => (<li key={index}> { event }  </li> ))} </ul> 
            </div>                       
        </div>
    );
  }
  
export default PhotoCard;
