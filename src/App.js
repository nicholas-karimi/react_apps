import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Age from './Age';
import Excuse from './Excuse';

function App() {
  // using fetch api
  // fetch('https://catfact.ninja/fact')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //   });

  const [catFact, setCatFact] = useState('');
  const fetchCatFact = () => {
    axios.get('https://catfact.ninja/fact').then(res => {
      // console.log(res.data);
      setCatFact(res.data.fact);
    });
  };
  useEffect(() => {
    fetchCatFact();
  }, []);
  /* using Axios
  axios.get('https://catfact.ninja/fact').then(res => {
    // console.log(res.data);
    setCatFact(res.data.fact); // runs an infinite loop because the compoent mounts, and unmount overagain
  }); */

  return (
    <div className="App">
      <button onClick={fetchCatFact}>Generate Cat Facts</button>
      <p>{catFact}</p>

      <br />
      {/* <Age /> */}
      <Excuse />
    </div>
  );
}

export default App;
