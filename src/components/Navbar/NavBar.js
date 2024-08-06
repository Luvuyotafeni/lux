import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'

const Navbar = () => {
  return (
    <div className='navigation'>
    <nav>
        <div className='company_name'>Lux resturant</div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/menu">Menu</Link>
        </li>
        <li>
          <Link><i class='bx bxs-cart'></i></Link>
        </li>
        <li>
          <Link to="/reserve">Reserve</Link>
        </li>
      </ul>
    </nav>
    </div>
  );
}

export default Navbar;
