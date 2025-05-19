import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const API_KEY= import.meta.env.VITE_API_KEY;

/* KILDE: Dokumentasjon og eksempler fra React Native + egen tilpasning 
i denne linken:  https://reactnative.dev/docs/network*/ 


function EventPage() {
   
  const { id } = useParams();
  const [event, setEvent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://app.ticketmaster.com/discovery/v2/events/${id}.json?apikey=${API_KEY}`)
      
      .then(rspp=> rspp.json())
      .then(data => {
        setEvent(data);
        setLoading(false);  

      });
  }, [id]);

  if (loading) return <p>Lasting ...</p>;
  if (!event) return <p>Ingen event funnet.</p>;

  return (
    <div className='event-page-card'>
      <h1>{event.name}</h1>
            <img src={event.images?.[0]?.url} ></img>
        <p>Dato: {event.dates?.start?.localDate}</p>
        <p>Land: {event._embedded?.venues?.[0]?.country.name}</p>
      <p>Venue: {event._embedded?.venues?.[0]?.name}</p>

       <p>By: {event._embedded?.venues?.[0]?.city.name}</p>
      <p>{event.description || 'Ingen beskrivelse.'}</p>
      <p>Billetter: {event.url}</p>
      <p>Sjanger: {event.classifications?.[0]?.genre?.name}</p>
                
            
      <Link to="/">Tilbake til Hjem</Link>
    </div>

    
  );

}

export default EventPage;
