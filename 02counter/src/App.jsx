import {useState} from "react";

function App() {

  const [counter, setCounter] = useState(15);
  const addValue = () => {
    console.log("Clicked", Math.random())
    if (counter >= 20) setCounter(20)
    else setCounter(counter + 1)
  }

  const decreaseValue = () => {
    console.log("Clicked", Math.random())
    if(counter <= 0) setCounter(0);
    else setCounter(counter-1)
  }
  return (
    <>
      <h1>Chai Aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button
        onClick={addValue}
      >Add Value</button>
      <br/>
      <button
        onClick={decreaseValue}
      >Decrease Value</button>
    </>
  )
}

export default App
