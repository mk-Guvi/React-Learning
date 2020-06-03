import React from "react";
import Person from "../components/Person";
function NameList() {
  //const names=["Mk","Dm","Mad"]
  const persons = [
    {
      id: 1,
      Name: "mk",
      Age: 20
    },
    {
      id: 2,
      Name: "Dm",
      Age: 21
    }
  ];
  ///const nameslist =names.map(name=><h2>{name}</h2>)

  //const personList=persons.map(person=><h2>I am {person.Name}.I am  {person.Age} years old.</h2>)

  const personList = persons.map(person => <Person person={person} />);
  return (
    <div>
      {/*<h2>{names[0]}</h2>
  <h2>{names[1]}</h2>
  <h2>{names[2]}</h2>
</div>
*/}
      {/*{nameslist}*/}
      {personList}
    </div>
  );
}
export default NameList;
