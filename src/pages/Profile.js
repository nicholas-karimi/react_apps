import ChangeProfile from '../components/ChangeProfile';
import { useContext } from 'react';
import { AppContext } from '../App';

const Profile = () => {
  const { username, setUsername } = useContext(AppContext);
  return (
    <div>
      <h1>PROFILE</h1>
      <p>Current user is: {username} </p>
      <br />
      <ChangeProfile setUsername={setUsername} />
    </div>
  );
};

export default Profile;
