import { useState } from 'react';
import './App.css'

function App() {

  let [counter, setCounter] = useState(0)

  // let counter = 0;

  const addValue = function(){
    if (counter < 20) {
      
      counter = counter + 1; // counter value in HTML page won't get update automatically because that will be only handled by React
      console.log(counter);   
      setCounter(counter) // so this way, using useState you can update UI that is HTML in page
    }
  }

  const decreases = () => {
    if (counter > 0) {
      console.log(counter - 1)
      counter = counter - 1;
      setCounter(counter);
    }
  }
  const reset = () => {
    
    counter = 0;
    console.log(counter)
      setCounter(counter);
  }

  return (
    <>
    <h1>Rishabh aur Reach</h1>
    <h2>Counter Value: {counter}</h2>

    <button
    onClick={addValue} 
    // not calling the addValue because we don't want to execute addValue, since we want addValue should be execute when button us clicked we are passing addValue as a reference without ()
    >Add Value</button>
    <br />
    <br />
    <button
    onClick={decreases}
    >Decrease Value</button>
    <br />
    <br />
    <button
    onClick={reset}
    >Reset Counter</button>
    </>
  )
}

export default App
