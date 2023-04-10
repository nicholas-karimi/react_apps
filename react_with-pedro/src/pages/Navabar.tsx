import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/about">Login</Link>
    </div>
  );
};

export default Navbar;
