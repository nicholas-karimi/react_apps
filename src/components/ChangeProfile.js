import { useState } from 'react';
import { useContext } from 'react';
import { AppContext } from '../App';

const ChangeProfile = () => {
  const [newUsername, setNewUsername] = useState('');
  const { username, setUsername } = useContext(AppContext);

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
      <button onClick={() => setUsername(newUsername)}>Change Username</button>
    </div>
  );
};

export default ChangeProfile;
