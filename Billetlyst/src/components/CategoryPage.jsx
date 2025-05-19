import { useParams, Link} from "react-router-dom";
import React, { useEffect, useState } from "react";
import Nav from "./Nav";
import EventCard from "./EventCard";


const API_KEY= "ZOKDUNG8B93mixzp5xx29XHsvuvzjLEb";

const CATEGORY_MAP  ={
    musikk:"Music",
    sport: "Sports",
    teater: "Theatre"
}
function CategoryPage() {
    const { category } = useParams();
    const [events, setEvents] = useState([]);
    
    const apiCategory = CATEGORY_MAP[category.toLowerCase()] || category;

    useEffect(()=>{
         // Henter eventer fra Ticketmaster (AI foreslo denne strukturen)
        fetch(`https://app.ticketmaster.com/discovery/v2/events.json?apikey=${API_KEY}&classificationName=${apiCategory}`)
      .then(res => res.json())
      .then(data => {
        const eventList = data._embedded?.events || [];
        setEvents(eventList);
      })
      .catch(err => console.error("API error:", err));
  },[apiCategory]);

  return(
    <>
    <Nav />
      <div style={{ marginTop: "80px", padding: "1rem" }}>
        <h2>Eventer for: {category}</h2>
        {events.length === 0 ? (
          <p>Ingen eventer funnet.</p>
        ):(
          <div className="card-container">
  {events.map((event) => (
    <EventCard key={event.id} event={event} />
  ))}
</div>

        )}
      </div>
    </>
  );
}

export default CategoryPage;

