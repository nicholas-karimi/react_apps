import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';

const Age = () => {
  const [predictAge, setPredictAge] = useState(null);
  let [name, setName] = useState('');

  const fetchAge = () => {
    axios.get(`https://api.agify.io/?name=${name}`).then(res => {
      //   console.log(res.data);
      setPredictAge(res.data);
    });
  };

  useEffect(() => {
    fetchAge();
  });

  //   text input
  const getValue = event => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  return (
    <div>
      <input type="text" placeholder="eg. Nicholas" onChange={getValue} />
      <br />
      <button onClick={fetchAge}>Predict Age</button>
      <br />
      <h4> Name: {predictAge?.name}</h4>
      <h4> Name Count: {predictAge?.count}</h4>
      <h4> Predicted age is: {predictAge?.age}</h4>
    </div>
  );
};

export default Age;
