const Home = props => {
  return (
    <div>
      <h1>Welcome to my app.</h1>
      <h4>
        Current user is: <strong>{props.username}</strong>
      </h4>
    </div>
  );
};

export default Home;
