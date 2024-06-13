import './navbar.css';

const Navbar = ({ user, clearUserHandler}) => {
  return (
    <nav className="container">
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