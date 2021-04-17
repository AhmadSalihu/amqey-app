import React from 'react'
import { Link } from 'react-router-dom'
import './footer.styles.css';

const Footer = () => { 
  return (
      <footer className="footer">
          <ul className="footer-right">
            <li>
              <h2>Company</h2>
              <ul className="box">
                <li><Link to="/">Contact Us</Link></li>
                <li><Link to="/">About Us</Link></li>
                <li><Link to="/">How To Place an Order</Link></li>
            </ul>
          </li>
            <li className="features">
              <h2>Vendor</h2>
              <ul className="box">
                <li><Link to="/vendor">Sell With Us</Link></li>
                <li><Link to="/">Vendor Login</Link></li>
            </ul>
          </li>
            <li>
              <h2>Customer</h2>
              <ul className="box">
                <li><Link to="/customer">Register</Link></li>
                <li><Link to="/">Login</Link></li>
            </ul>
          </li>
      </ul>
          <div className="footer-bottom">
            <p>All right reserved &copy;Amqey 2021</p>
         </div> 
      </footer>
  )
}

export default Footer;