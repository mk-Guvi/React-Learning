import React from "react";

function person({person}) {
  return (
    <div>
      <h2>
        I am {person.Name}.I am {person.Age} years old
      </h2>
    </div>
  );
}
export default person;
