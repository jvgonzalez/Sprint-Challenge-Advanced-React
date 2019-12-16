import React, { useState } from 'react';
import useCounter from '../Hooks/useCounter';

function TopCounter() {
  const [count, increment, decrement, reset] = useCounter()

  return(
    <div>
      <h2> Top Players = {count} </h2>
      <button  data-testid="counter-button" onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  )
} 

export default TopCounter;