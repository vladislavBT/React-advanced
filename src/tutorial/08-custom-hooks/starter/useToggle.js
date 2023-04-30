import { useState } from 'react';

const useToggle = (defaultValue) => {
  console.log("Usetoggle")
  const [show, setShow] = useState(defaultValue);

  const toggle = () => {
    console.log('toggle')
    setShow(!show);
  };

  return { show, toggle };
};

export default useToggle;
