import ChangeProfile from '../components/ChangeProfile';

const Profile = props => {
  return (
    <div>
      <h1>PROFILE</h1>
      <p>Current user is: {props.username} </p>
      <br />
      <ChangeProfile setUsername={props.setUsername} />
    </div>
  );
};

export default Profile;
