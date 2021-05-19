import { useState } from "react";

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);
  const reset = () => {
    setValue(initialValue);
  };

  const bind = {
    value: value,
    onChange: (e) => {
      setValue(e.target.value);
    }
  };
  //based in this arrangment the data will be called
  return [value, bind, reset];
};

export default useInput;
