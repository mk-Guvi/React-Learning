import React from "react";

import Com from "./Com";
export const Context1 = React.createContext();
export const Context2 = React.createContext();

const Main = () => {
  return (
    <div>
      <Context1.Provider value={"Provider-1"}>
        <Context2.Provider value={"Provider-2"}>
          <Com />
        </Context2.Provider>
      </Context1.Provider>
    </div>
  );
};

export default Main;
