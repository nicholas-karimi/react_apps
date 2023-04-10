import { useState } from 'react';
import { login, logout } from './store';
import { useDispatch, useSelector } from 'react-redux/es/exports';

const Login = () => {
  const [newUserName, setNewUserName] = useState('');

  const dispatch = useDispatch();
  const username = useSelector((state: any) => state.user.value.username);
  return (
    <div>
      <h3>Ligin Page</h3>
      <br />
      {username}
      <br />

      <input
        type="text"
        placeholder="username"
        onChange={e => {
          setNewUserName(e.target.value);
        }}
      />
      <br />
      {/* <input type="password" placeholder="password" /> */}
      <br />
      <button
        type="submit"
        onClick={() => dispatch(login({ username: newUserName }))}
      >
        Submit
      </button>
      <br />
      <button type="submit" onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};

export default Login;
