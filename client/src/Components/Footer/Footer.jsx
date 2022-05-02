import React from 'react'
import './Footer.scss'

function Footer() {
  return (
    <footer className='footer'>
        <div className="footer__rowA">
            <h2 className="footer__logo">Shift.coop</h2>
            <div className="footer__links-columns">
                <div className="footer__links-wrapper">
                    <h3 className="footer__links-subheader">community</h3>
                    <ul className="footer__links-list">
                        <li className="footer__link"><a href="#" className="footer__a-link">link 1</a></li>
                        <li className="footer__link"><a href="#" className="footer__a-link">link 2</a></li>
                        <li className="footer__link"><a href="#" className="footer__a-link">link 3</a></li>
                    </ul>
                </div>
                <div className="footer__links-wrapper">
                    <h3 className="footer__links-subheader">cooperative</h3>
                    <ul className="footer__links-list">
                        <li className="footer__link"><a href="#" className="footer__a-link">link 1</a></li>
                        <li className="footer__link"><a href="#" className="footer__a-link">link 2</a></li>
                        <li className="footer__link"><a href="#" className="footer__a-link">link 3</a></li>
                    </ul>
                </div>
                <div className="footer__links-wrapper">
                    <h3 className="footer__links-subheader">resources</h3>
                    <ul className="footer__links-list">
                        <li className="footer__link"><a href="#" className="footer__a-link">link 1</a></li>
                        <li className="footer__link"><a href="#" className="footer__a-link">link 2</a></li>
                        <li className="footer__link"><a href="#" className="footer__a-link">link 3</a></li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="footer__rowB">
            <p className="footer__copyright">C Shift Delivery 2022</p>
            <div className="footer__socials">
                <p className="footer__copy">Follow us:</p>
                <div className="footer__social-icon">fb</div>
                <div className="footer__social-icon">insta</div>
                <div className="footer__social-icon">twitter</div>
            </div>
        </div>
    </footer>
  )
}

export default Footer