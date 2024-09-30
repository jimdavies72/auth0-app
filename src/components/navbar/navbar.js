import './navbar.css';
import { fetcher } from '../../utils';

const Navbar = ({ user, clearUserHandler}) => {
  
  const loginHandler = () => {
    fetcher('/login', null, 'get');
  };
  
  return (
    <nav className="container">
      <h1>NAV BAR</h1>
      <button className="button-main" onClick={() => loginHandler()}>
        Login
      </button>
      <ul className="nav_links">
        {user && (
          <li>
            <p className="listLink">Home</p>
          </li>
        )}
        {user && (
          <li id="pFile">
            <p className="listLink">Profile</p>
          </li>
        )}
        {user && (
          <li id="uName">
            <p className="userName">Logged In: {user}</p>
          </li>
        )}
        {user && (
          <button className="button-main" onClick={() => clearUserHandler()}>
            Logout
          </button>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;