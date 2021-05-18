import React, { useEffect, useState } from "react";
import UseEffect from "./UseEffect";
const UseEffectCleanUp = () => {
  const [display, setDisplay] = useState(true);

  return (
    <>
      <button onClick={() => setDisplay(!display)}>
        Toggle Mouse Position
      </button>

      {display && <UseEffect />}
    </>
  );
};

export default UseEffectCleanUp;
