import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Nav from "./Nav";
import EventCard from "./Eventcard";
import ArtistCard from "./ArtistCard";




function Home() {
  const [events, setEvents] = useState([]);
  const [artists, setArtists] = useState([]);

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
        .then(data => {
          const events = data._embedded?.events || [];
          const artistsFromEvents = events.flatMap(event => event._embedded?.attractions || []);
          return { events, artists: artistsFromEvents };
        })
        .catch(() => ({ events: [], artists: [] }))
    )
  ).then(results => {
    const allEvents = results.flatMap(r => r.events);
    const uniqueEvents = Array.from(new Map(allEvents.map(e => [e.id, e])).values());
    setEvents(uniqueEvents);

    const allArtists = results.flatMap(r => r.artists);
    const uniqueArtists = Array.from(new Map(allArtists.map(a => [a.id, a])).values());
    setArtists(uniqueArtists);
  });
}, []);


  return (
    /*fikk hjelp av AI, ved section delen*/

    <>
    <Nav/>
      <h1>Billettlyst - Festivaler</h1>
      <div className="event-cards">
        {events.map(event => (
          <EventCard key={event.id} event={event} />
        ))}
        
      </div>

      <section>
  <h2>Artister</h2>
  <div style={{
    display: "flex",
    flexWrap: "wrap",
    gap: "1rem",
    justifyContent: "flex-start"
  }}>
    {artists.length === 0 ? (
      <p>Laster artister...</p>
    ) : (
      artists.map(artist => (
        <ArtistCard
          key={artist.id}
          navn={artist.name}
          rolle={artist.classifications?.[0]?.segment?.name || "Artist"}
          imageUrl={artist.images?.[0]?.url}
        />
      ))
    )}
  </div>
</section>




    </>
    
  );
  
  
}


export default Home;