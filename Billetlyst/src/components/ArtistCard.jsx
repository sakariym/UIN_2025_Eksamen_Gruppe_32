import React from "react";

function ArtistCard({ navn, rolle, imageUrl }) {
  return (
    <div style={{
      border: "1px solid #ccc",
      borderRadius: "8px",
      padding: "1rem",
      width: "180px",
      textAlign: "center",
      boxShadow: "0 2px 5px rgba(0,0,0,0.1)",
      backgroundColor: "#fff",
      fontFamily: "Arial, sans-serif"
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
