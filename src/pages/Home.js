import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const Home = () => {
  const { data, isLoading, isError, refetch } = useQuery(['cat'], () => {
    return axios.get('https://catfact.ninja/fact').then(res => res.data);
  });

  if (isError) {
    <p>Oh, Snapppp, there was an error try again!!!</p>;
  }
  if (isLoading) {
    return <h2>Getting data from server .....</h2>;
  }
  return (
    <div>
      <h1>Welcome to my app.</h1>
      <br />
      <p>{data?.fact}</p>

      <br />
      <button
        onClick={() => {
          refetch();
        }}
      >
        Update
      </button>
    </div>
  );
};

export default Home;
