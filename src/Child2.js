import React from 'react'
import CounterReducer from './CounterReducer'

const Child2 = () => {
  let [state, dispatch] = React.useReducer(CounterReducer, 0);
  console.log(state);
  return (
      <div>
        <h2>Value of reducer state is {state}</h2>
        <button onClick={()=>dispatch('INCREMENT')}>Increment Reducer</button>
      </div>
    )
}

export default Child2;
