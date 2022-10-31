import React from "react";
import { Container } from "react-bootstrap";
import Wave from "react-wavify";

function Waves() {
  return (
    <div className="wave-container h-100">
      <Wave
        fill="#24293F"
        paused={false}
        options={{
          height: 30,
          amplitude: 70,
          speed: 0.2,
          points: 3,
        }}
        style={{ opacity: ".5" }}
      />
      <Wave
        fill="#ff6675"
        paused={false}
        options={{
          height: 40,
          amplitude: 65,
          speed: 0.15,
          points: 3,
        }}
        style={{ position: "absolute", left: "0%", opacity: ".75" }}
      />
      <Wave
        fill="#24293F"
        paused={false}
        options={{
          height: 60,
          amplitude: 60,
          speed: 0.1,
          points: 3,
        }}
        style={{ position: "absolute", left: "0%" }}
      />
    </div>
  );
}

export default Waves;
