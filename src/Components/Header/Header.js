import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <header className="sticky-top">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid">
          <a className="navbar-brand w-50" href="#">
            <h2 className="text-left">this is logo</h2>
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item ms-3">
                <Link className="nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              <li className="nav-item ms-3">
                <Link className="nav-link" to='/addbooks'>Add Books</Link>
              </li>
              <li className="nav-item ms-3">
                <Link to='/managebooks' className="nav-link">Manage Books</Link>
              </li>
              {loggedInUser.email&& <li className="nav-item ms-3"><Link to='/orders' className="nav-link">Orders</Link></li> }
              <li className="nav-item ms-3">
                <Link to='/login' className="nav-link" tabIndex="-1" a>Login</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;