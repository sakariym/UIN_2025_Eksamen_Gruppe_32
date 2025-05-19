import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";





function Home() {
  const [events, setEvents] = useState([]);

  const API_KEY = "ZOKDUNG8B93mixzp5xx29XHsvuvzjLEb";
const FESTIVALS = [
  "Findings",
  "Neon",
  "Skeikampenfestivalen",
  "Tons of Rock"];



  


  useEffect(() => {
    Promise.all(
      FESTIVALS.map(festival =>
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&keyword=${festival}`)
          .then(res => res.json())
          .then(data => (data._embedded?.events ? data._embedded.events : []))
          .catch(() => [])
      )
    ).then(results => {
      const allEvents = results.flat();
      const uniqueEvents = Array.from(new Map(allEvents.map(e => [e.id, e])).values());
      setEvents(uniqueEvents);
    });
  }, []);

  return (
    <>
    <Nav/>
    <div>
      <h1>Billettlyst - Festivaler</h1>
      <ul>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/event/${event.id}`}>
              {event.name} - {event.dates?.start?.localDate}
            </Link>
          </li>
        ))}
      </ul>
    </div>
    </>
    
  );
  
}


export default Home;