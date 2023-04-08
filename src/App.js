import './App.css';
import { useState } from 'react';
// import Country from './Country';
// import Planets from './Planets';

function App() {
  let [count, setCount] = useState(0);
  const increaseCount = () => {
    setCount((count = count + 1));
    console.log(count);
  };
  return (
    <div className="App">
      <button onClick={increaseCount}>Increment Count</button>
      <br />
      {count}
    </div>
  );
}

// const User = props => {
//   return (
//     <div>
//       <h2>{props.name}</h2>
//       <h2>{props.email}</h2>
//       <h2>{props.age}</h2>
//       <h2>{props.profession}</h2>
//     </div>
//   );
// };

export default App;
