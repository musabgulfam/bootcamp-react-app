import React, {useContext} from 'react'
import CounterContext from './CounterContext'

const Child = () => {
  let counterValue = useContext(CounterContext);
  //console.log("This is an "+typeof(counterValue));
  return (
    <div>
      <h2>This is first child</h2>
      <h4>Counter value is {counterValue[0]}</h4>
      <button onClick={()=>{counterValue[1](++counterValue[0])}}>Increment</button>
    </div>
  )
}

export default Child; 