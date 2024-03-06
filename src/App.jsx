import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react'
function App() {
  const [value, setValue] = useState(1)
  // const [multipliedvalue, setMultipliedvalue] = useState(1)
  let multipliedvalue = (value*5);
  const multiplyby5 = () => {
    // setMultipliedvalue(value*5);
    setValue(value+1)
  }
  return (
    <>
      
      
       <h1>Main Value: {value} </h1>
       <button
       onClick={multiplyby5}
       >Click to multiply by 5</button>
       <h1>Multiplied Value: {multipliedvalue} </h1>
      
     
    </>
  )
}

export default App
