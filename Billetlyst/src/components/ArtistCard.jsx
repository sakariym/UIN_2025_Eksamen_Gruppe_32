import React from "react";

function ArtistCard({ navn, rolle, imageUrl }) {
  return (
    <div style={{
      border: "1px solid #e0e0e0",
      borderRadius: "12px",
      padding: "1rem",
      width: "180px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
      backgroundColor: "#fafafa",
      fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
      transition: "transform 0.2s ease, box-shadow 0.2s ease",
      cursor: "pointer",
    }}>
      {imageUrl && (
        <img
          src={imageUrl}
          alt={navn}
          style={{ width: "100%", height: "auto", borderRadius: "6px", marginBottom: "0.5rem" }}
        />
      )}
      <h3 style={{ fontSize: "1.1rem", margin: "0.5rem 0 0.25rem" }}>{navn}</h3>
      <p style={{ fontSize: "0.85rem", color: "#555", margin: 0 }}>{rolle || "Artist"}</p>
    </div>
  );
}

export default ArtistCard;
