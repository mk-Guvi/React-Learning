import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [timer, setTimer] = useState(0);
  const intervalRef = useRef();

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setTimer((prevTimer) => prevTimer + 1);
  //   }, 1000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  //With useREf
  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setTimer((prevTimer) => prevTimer + 1);
    }, 1000);

    return () => {
      clearInterval(intervalRef.current);
    };
  }, []);
  return (
    <>
      Timer - {timer}
      {/* <button
        onClick={() => {
          //this will cause the error as the interval is local scoped in useEffect to over come this we use useRef
          clearInterval(interval);
        }}
      >
        clearTimer
      </button> */}
      {/* As we know useRef can hold a reference to a dom node using the ref
      attribute it can also be used to store any mutable value and the value
      will be persisted through rerenders while also no causing any additional
      renders when its value changes */}
      <button
        onClick={() => {
          //this will cause the error as the interval is local scoped in useEffect to over come this we use useRef
          clearInterval(intervalRef.current);
        }}
      >
        clearTimer
      </button>
    </>
  );
};

export default UseRef;
