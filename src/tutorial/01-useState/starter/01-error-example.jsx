const ErrorExample = () => {

  let counter = 0;

  const handleClick =()=>{
      counter = counter + 1
      console.log(counter);
  }
  
  return (
    <div>
      <h2>{counter}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        increase
      </button>
    </div>
  )
};

export default ErrorExample;
