import React, { useState } from "react";
import useInput from "./useInput";

const Custom = () => {
  // const [fname, setfname] = useState("");
  // const [lname, setlname] = useState("");

  //[Fname, bindFname, resetFname]=[value,bindobject,resetfunction]
  const [Fname, bindFname, resetFname] = useInput("");
  const [Lname, bindLname, resetLname] = useInput("");
  console.log(bindFname);
  // const submitHandler = (e) => {
  //   e.preventDefault();
  //   alert(`hello ${fname} ${lname}`);
  // };
  const submitHandler = (e) => {
    e.preventDefault();
    alert(`hello ${Fname} ${Lname}`);
    resetFname();
    resetLname();
  };
  return (
    <>
      {/* <form onSubmit={submitHandler}>
        <div>
          <label>FirstName</label>
          <input
            type="text"
            value={fname}
            onChange={(e) => setfname(e.target.value)}
          ></input>
        </div>
        <div>
          <label>LastName</label>
          <input
            type="text"
            value={lname}
            onChange={(e) => setlname(e.target.value)}
          ></input>
        </div>
        <button type="submit">Submit</button>
      </form> */}
      <form onSubmit={submitHandler}>
        <div>
          <label>FirstName</label>
          <input type="text" {...bindFname}></input>
        </div>
        <div>
          <label>LastName</label>
          <input type="text" {...bindLname}></input>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default Custom;
