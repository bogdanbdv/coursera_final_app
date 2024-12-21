import React from 'react';
import "../components/styles/Footer.css";
import Logo from "../components/assets/logo.png";

const Footer = () => {
  return (
    <div>
        <div className="footer-background">
            <div className="footer-container">
                <div className="footer-content">
                    <div className="copyright">
                        <img src={ Logo } alt="Little Lemon logo" />
                        <div className="copyright">
                            <p>© 2024 Little Lemon. All rights reserved.</p>
                        </div>
                    </div>
                    <div className="opening-times">
                        <h5>OPENING TIMES</h5>
                        <ul>
                            <li>Mon - Fri: 10:00AM - 12:00AM</li>
                            <li>Sat - Sun: 12:00AM - 02:00AM</li>
                        </ul>
                    </div>
                    <div className="contact">
                        <h5>CONTACT US</h5>
                        <ul>
                            <li>2376 West Maple Avenue, Chicago, IL 60611</li>
                            <li>Telephone: (312) 555-1234</li>
                            <li>Email: contact@littlelemon.com</li>
                        </ul>
                    </div>
                </div>
                {/* <div className="copyright">
                    <p>© 2024 Little Lemon. All rights reserved.</p>
                </div> */}
            </div>
        </div>
    </div>
  )
}

export default Footer
