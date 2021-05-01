import React from 'react'

import './footer.styles.css';

const Footer = () => { 
  return (
      <footer className="footer">
      <div className="footer-left">
        <img src='/favicon.ico.png' alt="" />
        <div className="socials">
          <a href='/'><i class="fab fa-facebook-square"></i></a>
          <a href='/'><i class="fab fa-twitter-square"></i></a>
          <a href='/'><i class="fab fa-whatsapp-square"></i></a>
          <a href='/'><i class="fab fa-instagram-square"></i></a>
          </div>
      </div>
        <ul className="footer-right">
        <li>
          <h2>Company</h2>
          <ul className="box">
            <li><a href='/'>How To Place an Order</a></li>
            <li><a href='/'>About Us</a></li>
            <li><a href='/'>Contact Us</a></li>
          </ul>
        </li>
        <li className="features">
          <h2>Vendor</h2>
          <ul className="box">
            <li><a href='/'>Vendoer register</a></li>
            <li><a href='/'>Vendoer DashBord</a></li>
            <li><a href='/'>Vendor Login</a></li>
          
          </ul>
        </li>
         <li>
          <h2>Customer</h2>
          <ul className="box">
            <li><a href='/'>Customer register</a></li>
            <li><a href='/'>Sign In</a></li>
            <li><a href='/'>New Arrivals</a></li>
          </ul>
        </li>
      </ul> 
      <footer className="footer-bootom">
        <p>All right reserved &copy;Amqey2021</p>
      </footer>
      </footer>
  )
}

export default Footer;