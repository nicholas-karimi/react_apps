import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';

const Excuse = () => {
  //   const [partyExcuse, setPartyExcuse] = useState({});
  //   const [developerExcuse, setDeveloperExcuse] = useState('');
  //   const [officeExcuse, setOfficeExcuse] = useState('');
  let [myexcuse, setExcuse] = useState('');

  const fetchExcuse = excuse => {
    axios
      .get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`)
      .then(response => {
        //   console.log(response.data);
        setExcuse(response.data[0].excuse);
      });
  };
  useEffect(() => {
    fetchExcuse();
  }, []);

  return (
    <div>
      <h2>Generate an Excuse</h2>
      <button onClick={() => fetchExcuse('party')}>Party</button> <br />
      <button onClick={() => fetchExcuse('developers')}>Developers</button>
      <br />
      <button onClick={() => fetchExcuse('office')}>Office</button> <br />
      <p>{myexcuse}</p>
    </div>
  );
};

export default Excuse;
