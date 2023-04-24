import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';

const CLEAR_LIST = 'CLEAR_LIST'
const RESET_LIST = 'RESET_LIST'

const reducer = (state, action) => {
  if (action.type === CLEAR_LIST) {
    return {...state, people: [] }
  }

  if(action.type === RESET_LIST){
    return {...state, people: data}
  }
}

const defaultState = {
  people: data,
  isLoading: false,
}



const ReducerBasics = () => {

  const [state, dispatch] = useReducer(reducer, defaultState);

  const clearList = () => {
   dispatch({ type: CLEAR_LIST })
  }

  const resetList = () => {
  dispatch({ type: RESET_LIST })
  }

  const removeItem = (id) => {
    // dispatch({type : Re)
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  }
  
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>remove</button>
          </div>
        )
      })}
      {
        state.people.length < 1 ? (
        <button
          className='btn'
          style={{ marginTop: '2rem' }}
          onClick={resetList}
        >
          reset
        </button>
      ) :(
      <button
        className="btn"
        style={{ marginTop: '2rem' }}
        onClick={(clearList)}
      >
        clear items
      </button>
      )
    }
    </div>
  )
};

export default ReducerBasics;
