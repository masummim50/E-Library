import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css'

const Header = () => {
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  return (
    <header className="sticky-top bg-success text-white">
    <div className="container">
      <nav className="navbar navbar-expand-lg navbar-light">
        <div className="container-fluid text-white">
          <Link className="text-white navbar-brand w-50" to='/'>
            <h2 className="text-left">E-Library</h2>
            <p>Books of world at hand</p>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav d-flex align-items-center justify-content-center">
              <li className="nav-item ms-3">
                <Link className="text-white nav-link active" aria-current="page" to='/'>Home</Link>
              </li>
              {loggedInUser.email&& <li className="nav-item ms-3"><Link to='/orders' className="text-white nav-link">Orders</Link></li> }
              {loggedInUser.email && 
              <li className="nav-item ms-3 dropdown">
                <Link className="text-white nav-link" to='/addbooks'>
                  Admin
                <div class="dropdown-content">
                  <li className="nav-item ms-3">
                  <Link className="nav-link" to='/addbooks'>Add Books</Link>
                  </li>
                  <li className="nav-item ms-3">
                    <Link to='/managebooks' className="nav-link">Manage Books</Link>
                  </li>
                </div>
                </Link>
              </li>}
              
              {
                loggedInUser.email ? <li className="nav-item ms-3"><Link className="text-white nav-link" to='/'><img style={{width:'33px', borderRadius:'50%'}} src={loggedInUser.photo} alt=""/></Link></li> : <li className="nav-item ms-3">
                <Link to='/login' className="text-white nav-link" tabIndex="-1" a>Login</Link>
              </li>
              }
            </ul>
          </div>
        </div>
      </nav>
    </div>
  </header>
  );
};

export default Header;