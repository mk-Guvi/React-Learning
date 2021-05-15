import React, { Component } from "react"; //to use class import the {component} from react lib
class Ref extends Component {
  constructor(props) {
    super(props);
    // creating this.inputRef so that we can use React.createRef at required fields
    this.inputRef = React.createRef();
    //callBack refs
    this.cbRef = null; //step-1:createing a property
    //  step-2:creating a method that accepts the dom-elemnt as a paraameter which assigns the dom element to property(step-1) created .

    this.setcbRef = (element) => {
      this.cbRef = element;
    };
  }
  componentDidMount() {
    //it returns an object that holds current dom node
    // this.inputRef.current.focus();
    // console.log(this.inputRef);
    //using calbackRefs
    //NOTE:React will call refcallback with the domelement when the component mounts and call it with null when the component unmounts that is the reason it is really important to check if a value exists on the reference property and it is not null thats why we use if(this.cbRef){}
    if (this.cbRef) {
      this.cbRef.focus();
    }
  }

  render() {
    return (
      <>
        <input type="text" ref={this.inputRef} />
        {/* step-3:attaching the setcbRef to the required field where the dom element is passed as parameter in this.setcbRef */}

        <input type="text" ref={this.setcbRef} />
        <button
          onClick={() => {
            alert(this.inputRef.current.value);
          }}
        >
          alert
        </button>
      </>
    );
  }
}
export default Ref;
