import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'
import axios from 'axios'
import './Navbar.css';

function Navbar() {

  // updated by Shoujuan Fan

  const auth = useSelector(state => state.auth)

  const { user, isLogged } = auth


  const handleLogout = async () => {
    try {
      await axios.get('/user/logout')
      localStorage.removeItem('firstLogin')
      window.location.href = "/";
    } catch (err) {
      window.location.href = "/";
    }
  }

  const userLink = () => {
    return <li className="drop-nav">
      <Link to="#">
        {user.name} <i class="fa-solid fa-circle-chevron-down"></i>
      </Link>

      <ul className="dropdown">
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/my-order">My order</Link></li>
        <li><Link to="/" onClick={handleLogout}>Logout</Link></li>
      </ul>
    </li>
  }


  // end of updating

  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            Boba Master
            <i className='fab fa-typo3' />
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Products
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/photos'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Photos
              </Link>
            </li>

            <li className='nav-item'>
              <Link
                to='/about'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About
              </Link>
            </li>
            {
              isLogged
                ? userLink()
                : <li>
                  <Link
                    to='/sign-in'
                    className='nav-links-mobile'
                    onClick={closeMobileMenu}
                  >
                    Sign In
                    
                  </Link>
                  
                </li>
            }

          </ul>
          {button && <Button buttonStyle='btn--outline'>SIGN IN</Button>}

        </div>
      </nav>
    </>
  );
}

export default Navbar;