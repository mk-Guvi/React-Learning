//Event HAndler is a Function not a Function call so do not add "()""
import React from "react";
function event() {
  function event2() {
    return console.log("Fucntion clicked");
  }
  return (
    <div>
      <button onClick={() => console.log("Clicked")}>Event 1</button>

      <button onClick={event2}>Event 2</button>
    </div>
  );
}
export default event;
