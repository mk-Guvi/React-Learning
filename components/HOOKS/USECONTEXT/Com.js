import React, { useContext } from "react";
import { Context1, Context2 } from "./MainCom";

const Com = () => {
  const con1 = useContext(Context1);
  const con2 = useContext(Context2);
  return (
    <h3>
      Provider-1 {con1}
      <br /> Provider-2{con2}
    </h3>
  );
};

export default Com;
