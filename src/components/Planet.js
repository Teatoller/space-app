import React from "react";

function Planet(props) {
  const imageUrl = "../img/" + props.url;
  return (
    <div className="card">
      <div>
        <img src={imageUrl} alt={props.name} />
      </div>
      <h2>{props.name}</h2>
      <p>{props.desc}</p>
      <h3>Planet Profile</h3>
      <ul>
        <li>
          <strong>Diameter:</strong>
          {props.diameter}
        </li>
        <li>
          <strong>Moons:</strong> {props.moons}
        </li>
      </ul>
    </div>
  );
}
export default Planet;
