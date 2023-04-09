import { useState } from 'react';

const ChangeProfile = props => {
  const [newUsername, setNewUsername] = useState('');

  const getUserName = username => {
    // console.log(username.target.value);
    setNewUsername(username.target.value);
  };

  // const updateUsername = username => {};
  return (
    <div>
      <h1>Update PROFILE</h1>
      <br />
      <input
        type="text"
        placeholder="enter preferred username"
        onChange={getUserName}
      />
      <br />
      <button onClick={() => props.setUsername(newUsername)}>
        Change Username
      </button>
    </div>
  );
};

export default ChangeProfile;
