import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Engineer",
          "Game Developer",
          "Cloud Engineer",
        ],
        autoStart: true,
        loop: true,
        delay: 30,         // Faster typing
        deleteSpeed: 20,   // Faster deletion
        pauseFor: 1000,    // Shorter pause between phrases
      }}
    />
  );
}

export default Type;
