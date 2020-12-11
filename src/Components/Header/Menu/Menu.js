import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

const Menu = () => {
  return (
    <nav className='main-menu'>
      <Link to='/'>Products</Link>
      <Link to='/'>Service &amp; Mots</Link>
      <Link to='/'>About</Link>
      <Link to='/'>Contact</Link>
      <Link to='/'>Contact</Link>
    </nav>
  );
};

export default Menu;
