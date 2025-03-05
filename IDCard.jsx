import React from "react";
import "./IDCard.css"; // Import the CSS file

export default function IDCard({ name, job, email, image }) {
  return (
    <div className="id-card">
      {/* Profile Image */}
      <img src={image} alt={name} className="profile-image" />

      {/* ID Box - Centered Details */}
      <div className="id-details">
        <h2><span>Name:</span> {name}</h2>
        <p><span>Job:</span> {job}</p>
        <p><span>Email:</span> {email}</p>
      </div>
    </div>
  );
}
