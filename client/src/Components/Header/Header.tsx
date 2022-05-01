import React from 'react'
import CTAButton from '../CTAButton/CTAButton'
import './Header.scss'

const Header: React.FC = () => {
  return (
    <header className='header'>
        <div className="header__logo-nav">
            <h2 className="header__logo">Shift.coop</h2>
            <nav className="header__nav">
                <ul className="header__links">
                    <li className="header__nav-link">features</li>
                    <li className="header__nav-link">pricing</li>
                    <li className="header__nav-link">community</li>
                    <li className="header__nav-link">support</li>
                </ul>
            </nav>
        </div>
        <div className="header__login-signup">
            <CTAButton buttonText='Login' />
            <CTAButton buttonText='Register' />
        </div>
    </header>
  )
}

export default Header