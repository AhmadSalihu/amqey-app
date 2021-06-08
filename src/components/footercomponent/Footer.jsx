import React from 'react'
import { useLocation } from 'react-router-dom';
import * as GrIcons from 'react-icons/gr';
import * as FaIcons from 'react-icons/fa';

import './footer.styles.css';

const Footer = () => { 
  const location = useLocation()
  return (
    <>
      	{
		location.pathname === '/' && (
      <footer className="footer">
      <div className="footer-left">
        <img src='/favicon.ico.png' alt="amqey" />
        <div className="socials">
          <a href='/'><GrIcons.GrFacebook className="gr" /></a>
          <a href='/'><FaIcons.FaTwitterSquare className="fa" /></a>
          <a href='/'><FaIcons.FaInstagramSquare className="fa" /></a>
          <a href='/'><FaIcons.FaWhatsappSquare className="fa" /></a>
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
            <li><a href='/vendor'>Vendor register</a></li>
            <li><a href='/dashboard'>Vendor DashBord</a></li>
            <li><a href='/vendor_login'>Vendor Login</a></li>
          
          </ul>
        </li>
         <li>
          <h2>Customer</h2>
          <ul className="box">
            <li><a href='/signup'>Customer register</a></li>
            <li><a href='/signin'>Sign In</a></li>
            <li><a href='/'>User DashBord</a></li>
          </ul>
        </li>
      </ul> 
      <footer className="footer-bootom">
        <p>All right reserved &copy;Amqey2021</p>
      </footer>
      </footer>
    )}
    </>
  )
}

export default Footer;