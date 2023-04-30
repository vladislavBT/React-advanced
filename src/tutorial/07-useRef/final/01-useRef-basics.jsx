import { useEffect, useRef, useState } from 'react';

const UseRefBasics = () => {
  const [value, setValue] = useState(0)
  //render

  const refContainer = useRef(null)
  // not rerender

  // const isMounted = useRef(false)
  // console.log(isMounted.current)

  const handleSubmit = (e) => {
    e.preventDefault()

    console.log(refContainer.current)
    // console.log(e.target.value)
    // console.log(e.currentTarget)
    // console.log(e.target)

    const name = refContainer.current.value
    console.log(name);
  }

  useEffect(() => {
  
    console.log(refContainer.current.value)
    // refContainer.current.focus()
  })


  // useEffect(() => {
  //   if (!isMounted.current) {
  //     isMounted.current = true
  //     return
  //   }
  //   console.log('re-render')
  // }, [value])

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            id="name"
            ref={refContainer}
            className="form-input"
          />
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
      <h1>value : {value}</h1>
      <button onClick={() => setValue(value + 1)} className="btn">
        increase
      </button>
    </div>
  )
};

export default UseRefBasics;
