import { Link } from "react-router-dom";

export default function EventCard({ event }) {
  return (
    <Link to={`/event/${event.id}`}>
      Se detaljer
      <article className="event-card">
        {/* Viser event-bilde fra API */}
        <img
          src={event.images?.[0]?.url}
          alt={event.name}
          style={{ width: "100%", borderRadius: "8px" }}
        />
        {/* Viser kategori (genre) */}
        <p>{event.classifications?.[0]?.genre?.name}</p>
        {/* Viser event-navn */}
        <h3>{event.name}</h3>
        {/* Viser dato */}
        <p>{event.dates?.start?.localDate}</p>
        {/* Klikkbar lenke til EventPage */}
      </article>
    </Link>
  );
}
