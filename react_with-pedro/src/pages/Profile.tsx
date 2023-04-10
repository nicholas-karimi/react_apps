interface Props {
  name?: string;
}

const Profile = (props: Props) => {
  return (
    <div>
      <h3>YOUR PROFILE</h3>
      <br />
      <p>Hello {props.name}. Welcome</p>
    </div>
  );
};

export default Profile;
