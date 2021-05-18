import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";
import UseEffectCleanUp from "./UseEffectCleanUp";
const AppH = () => {
  return (
    <>
      {/* <UseState /> */}
      {/* commenting this to know about cleanup in useEffect */}
      {/* <UseEffect /> */}
      <UseEffectCleanUp />
    </>
  );
};

export default AppH;
