import { useEffect, useState } from 'react'

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false)
  console.log("render")
  return (
    <div>
      <button className="btn" onClick={() => setToggle(!toggle)}>
        toggle component
      </button>
      {toggle && <RandomComponent />}
    </div>
  )
}




const RandomComponent = () => {
  useEffect(() => {
    console.log('hmm, this is interesting');
    const intID = setInterval(() => {
      console.log('hello from interval')
    }, 500)

   
    // does not stop, keeps going
    // every time we render component new interval gets created
    return () => {
      console.log("aosudbjkansd");
      return clearInterval(intID)}
  }, [])

  // useEffect(() => {
  //   // console.log('hmm, this is interesting');
  //   const someFunc = () => {
  //     // some logic here
  //   }
  //   window.addEventListener('scroll', someFunc)
  //   return () => window.removeEventListener('scroll', someFunc)
  // }, [])

  return <h1>hello there</h1>
}
export default CleanupFunction 
