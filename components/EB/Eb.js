import React from "react";

function Eb({ heroName }) {
  if (heroName === "joker") {
    throw new Error("Not a person");
  }
  return <h1>{heroName}</h1>;
}

export default Eb;
