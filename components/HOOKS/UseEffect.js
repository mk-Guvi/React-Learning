import React, { useEffect, useState } from "react";
const UseEffect = () => {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  useEffect(() => {
    //the useEffect will be called everytime any changes occurs in the component.To avoid unneccessary rerenders we can call  the useEffect by adding an dependency array with the prop/states names
    //note this will be called even the component is removed which can cause an memory leak issue to overcome use cleanup return method in the useEffect of this eventlistner
    console.log("updated");
    document.title = `clicked ${count} Times`;
  }, [count]); //this ensures that the useEffect is called only when there is a change in count state

  const addCount = () => {
    setCount((ps) => ps + 1);
  };
  const logmousePosition = (e) => {
    console.log("mouse Event");
    setX(e.clientX);
    setY(e.clientY);
  };
  useEffect((e) => {
    window.addEventListener("mousemove", logmousePosition);
    //willcomponentUnmount is similar to return method in useEffect()
    return () => {
      console.log("component Unmount");
      window.removeEventListener("mousemove", logmousePosition);
    };
  }, []); //this allows to call the useEffect only at first render of the component

  useEffect(() => {
    const interval = setInterval(addCount, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []); //the empty dependence array will not update the count value so you need to eitherr add count state as dependence array or add prevstate in the setCount method of addCount function where the setCount keeps the count value we dont have to add the count as dependency array

  return (
    <>
      <input
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder="Enter Name"
      />
      <button onClick={() => setCount(count + 1)}>Click {count} Times</button>

      <h3>
        X:{x} Y:{y}
      </h3>
      <h4>{count}</h4>
    </>
  );
};

export default UseEffect;
