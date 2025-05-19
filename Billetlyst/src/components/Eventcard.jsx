import { useEffect } from "react";
import "../assets/styles/gameCard.scss";
import { Link, useParams } from "react-router-dom";

function EventCard ({ id, title}) {
  return (
<div classname="event-card">
<h3>{title}</h3>
<Link to={`/event/${id}`}>Se detaljer</Link>
</div>
);
}
export default EventCard;