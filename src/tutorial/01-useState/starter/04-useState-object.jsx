import { useState } from 'react';

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: 'Peter',
    age: 24,
    hobby: 'read books',
  })

  let [value, setName] = useState("Ivan")

  const displayPerson = ()=>{
    if(person.name==='Peter'){
      setPerson({
        name: 'Ivan',
        age: 25,
        hobby: "train football"
      })
    }if(person.name==='Ivan'){
      setPerson({
        name: 'Peter',
        age: 24,
        hobby: 'read books',
      })
    }
  }
  const showName = () => {
    if (person.name === 'Ivan') {
      setName((value = 'Ivan'))
      console.log(value)
    }
    if (person.name === 'Peter') {
      setName((value = 'Peter'))
    }
    console.log(person.name)
  }

  return (
    <div>
      <h1>{person.name}</h1>
      <h4>{person.age}</h4>
      <h4>Likes to: {person.hobby}</h4>
      <div onClick={displayPerson}>
        <button className="btn" onClick={showName}>
          <h6>Show: {value}</h6>
        </button>
      </div>
    </div>
  )
};

export default UseStateObject;
