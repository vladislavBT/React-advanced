import { useState } from 'react';

const UseStateBasics = () => {
  // console.log(useState());
  // console.log(useState('jo koy'));
  // const value = useState()[0];
  // const handler = useState()[1];
  // console.log(value, handler);
  const value = useState(0)[0];
  const func = useState(0)[1];


  const [count, setCount] = useState(0);
  const handleClick = () => {
    // console.log(count)
    setCount(count + 1);
    // be careful, we can set any value
    // setCount('pants');
  };

  const handleClick2 = () => {
    console.log(value)
    func(value + 1)
    // be careful, we can set any value
    // setCount('pants');
  }
  return (
    <div>
      <h4>You clicked {count} times</h4>
      <button className="btn" onClick={handleClick}>
        Click me
      </button>
      <h4>You clicked {value} times</h4>
      <button className="btn" onClick={handleClick2}>
        Click me
      </button>
    </div>
  )
};

export default UseStateBasics;
