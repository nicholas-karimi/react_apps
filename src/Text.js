import React from 'react';
import { useState, useEffect } from 'react';

const Text = () => {
  const [text, setText] = useState('');

  //   use effect
  useEffect(() => {
    console.log('Component Mounted!');

    return () => {
      console.log('Component Unmounted');
    };
  }, []);

  const displayText = event => {
    setText(event.target.value);
  };
  return (
    <div>
      {/* <h3> I am text </h3> */}
      <input onChange={displayText} />
      <h1>{text}</h1>
    </div>
  );
};

export default Text;
