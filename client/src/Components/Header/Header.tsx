import React from 'react';
import CTAButton from '../CTAButton/CTAButton';
import './Header.scss';
import shiftLogo from '../../assets/logos/medium/Shift_RGB_medium.png';

const Header: React.FC = () => {
  return (
    <header className='header'>
      <div className='header__logo-nav'>
        {/* <h2 className='header__logo'>Shift.coop</h2> */}
        <img className='header__logo' src={shiftLogo} alt='Shift logo' />
        <nav className='header__nav'>
          <ul className='header__links'>
            {/* <li className='header__nav-link'>Home</li> */}
            <li className='header__nav-link'>Services</li>
            <li className='header__nav-link'>About Us</li>
            {/* <li className='header__nav-link'>Vision</li> */}
            {/* <li className='header__nav-link'>Team</li> */}
            {/* <li className='header__nav-link'>Partners</li> */}
            {/* <li className='header__nav-link'>Media</li> */}
            <li className='header__nav-link'>Contact</li>
            {/* <li className='header__nav-link'>Blog</li> */}
          </ul>
        </nav>
      </div>
      <div className='header__login-signup'>
        <CTAButton buttonText='Get a Quote' />
        <CTAButton buttonText='Login' />
      </div>
    </header>
  );
};

export default Header;
