import './App.css';
import { useState } from 'react';
// import Country from './Country';
// import Planets from './Planets';

function App() {
  // increment value
  let [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((count = count + 1));
    console.log(count);
  };
  const decreaseCount = () => {
    setCount(count--);
  };
  const setZero = () => {
    setCount((count = 0));
  };
  // display value as user types
  let [userInput, setUserInput] = useState(''); //default is empty string
  const displayValue = event => {
    // console.log(event.target.value);
    setUserInput(event.target.value);
  };

  // show or hide text state
  // let [toggleText, setTextToggle] = useState(false);
  let [textColor, setTextColor] = useState('black');

  return (
    <div className="App">
      <button onClick={increaseCount}>Increment</button>
      <button onClick={decreaseCount}>Decrease</button>
      <button onClick={setZero}>Set to Zero</button>
      <br />
      {count}
      <hr />
      <h5>Chnage user input as they type on a text box</h5>
      <input type="text" onChange={displayValue} /> <br />
      {userInput}
      <hr />
      <h4>Show or Hide text on button click</h4>
      <button
        onClick={() => {
          // setTextToggle(!toggleText);
          setTextColor(textColor === 'black' ? 'red' : 'black');
        }}
      >
        Show/Hide
      </button>
      <br />
      {/* {toggleText && <p>I Love React and Django😎</p>} */}
      <p style={{ color: textColor }}>I Love React and Django😎</p>
    </div>
  );
}

export default App;
