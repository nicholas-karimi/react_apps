import { useContext } from 'react';
import { AppContext } from '../App';

const Home = () => {
  const { username } = useContext(AppContext);
  return (
    <div>
      <h1>Welcome to my app.</h1>
      <h4>
        Current user is: <strong>{username}</strong>
      </h4>
    </div>
  );
};

export default Home;
