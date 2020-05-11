import React from "react";
import "./App.css";
import Planet from "./components/Planet";

function App(props) {
  return (
    <div className="container">
      {props.galaxy.map((planet) => (
        <Planet
          key={planet.id}
          name={planet.name}
          diameter={planet.diameter}
          moons={planet.moons}
          desc={planet.desc}
          url={planet.url}
        />
      ))}
    </div>
  );
}

export default App;
