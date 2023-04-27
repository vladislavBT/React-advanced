import React from 'react';
import { data } from '../../../data';
import { useReducer } from 'react';
import { CLEAR_LIST, RESET_LIST, REMOVE_ITEM } from './actions'
import reducer from './reducer'

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
    dispatch({ type: REMOVE_ITEM, payload: { id } })
  
  }
  
  return (
    <div>
      {state.people.map((person) => {
        const { id, name } = person
        return (
          <div key={id} className="item">
            <h4>{name}</h4>
            <button onClick={() => removeItem(id)}>removе</button>
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
