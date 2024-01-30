import React from 'react';

import { ReactComponent as Logo } from '../../images/horizontal-logo-white.svg';

import '../../css/header.css';

const Header = () => {
  return (
    <header className='header'>
      <Logo className='header__logo' />
      <div className='header__emoji'>
        <span className='header__rhino' aria-label='rhinoceros' role='img'>🦏</span>
      </div>
    </header>
  );
}

export default Header;
