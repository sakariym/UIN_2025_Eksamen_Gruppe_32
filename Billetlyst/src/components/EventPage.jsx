import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';


const API_KEY = 'ZOKDUNG8B93mixzp5xx29XHsvuvzjLEb';

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
    <div>
      <h1>{event.name}</h1>
        <p>Dato: {event.dates?.start?.localDate}</p>
       <p>Lokasjon:{event._embedded?.venues?.[0]?.name}</p>
      <p>{event.description || 'Ingen beskrivelse.'}</p>
      <Link to="/">Tilbake til Hjem</Link>
    </div>

    
  );






}

export default EventPage;
