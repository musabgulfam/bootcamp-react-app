import React, {useState} from 'react';
import './App.css'
import {Message} from './Message'

function App() {
  let [count, setCount]=useState(1);
  let [isDay, setDay]=useState(false);
  return (
    <div className={`${isDay ? 'dayLight' : 'box'}`}>

      <h1>It's {isDay ? "Morning" : "Night"}</h1>
      
      <Message counter={count} />
      
      <br />
      
      <button onClick={()=>{
        setDay(!isDay)
      }}>Shift</button>
      
      <button onClick={() => setCount(count + 1)}>
        Update Counter
      </button>
    
    </div>
  )
}

export default App;
