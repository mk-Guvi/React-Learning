import React, { useState } from "react";

const UseState = () => {
  let initialCOunt = 0;
  const [count, setCount] = useState(initialCOunt);
  //Below the function is  is called multiple times so that the intial state(0) get added by 1 as much times the function is called but if  you use setState without prevState as argument then it will use the function for once this is because react may group multiple setstate calls into single update for better performance that is all function calls are done in one go.
  // const increament = () => {
  //   for(let i=0;i<5;i++){
  //     setCount(count+1)
  //   }
  // };

  // /when you have to update the state based on previous satte we call a function in setSTate method with prevState as parameter
  //to overcome above issue we add prevstate as a parameter to setState method that get the previous state value and perform the operations
  const increament = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevState) => prevState + 1);
    }
  };
  const [name, setName] = useState({ fn: "", ln: "" });
  return (
    <>
      <h1>Count : {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increament</button>
      <button onClick={() => setCount(count - 1)}>Increament</button>
      <button onClick={() => setCount(initialCOunt)}>Reset</button>
      <button onClick={increament}>Increament By 5</button>
      {/* NOTE:IN  useState the objects does not merge the new items by default in the exiting object so you need merge it by spread operator */}
      <input
        value={name.fn}
        onChange={(e) => setName({ ...name, fn: e.target.value })}
        placeholder="FirstName"
      />
      <input
        value={name.ln}
        onChange={(e) => setName({ ...name, ln: e.target.value })}
        placeholder="LastName"
      />
      <h3>FirstName: {name.fn}</h3>
      <h3>LastName: {name.ln}</h3>
    </>
  );
};

export default UseState;
