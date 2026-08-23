import { useState } from 'react'

import './App.css'

function App() {
  const [value, setValue] = useState(2)
  

  const increase = () => {
    setValue(value + 1); // NOT so good
  }

  const decrement = () => {
    setValue(value -1);
  }

  return (
    <>
      <h1>Value: {value}</h1>
      <button onClick={increase}>increase click</button>
      <button onClick={decrement}>decreaseclick</button>
    </>
  )
}

export default App
