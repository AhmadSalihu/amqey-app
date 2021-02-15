import React from 'react'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'
import './Header.styles.scss'

export default function Header({ currentUser }) {
  return (
    <div className="header">
      <Link className="logo-container" to='/'>
        <Logo className="logo" />
      </Link>
      <div className="options">
      <Link className="option" to='/shop'>
        SHOP
      </Link>
      <Link className="option" to='/trackorder'>
      TrackOrder
      </Link>
      <Link className="option" to='/sell with us'>
        Sell Wiht Us
      </Link> 
      {
        currentUser ? 
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>   
        :
        <Link className="option" to='/signin'>Sign In</Link>
      }
      </div>
    </div>
  


    // <div className="grid-container">
    // <header>
    //   <div>
    //     <img src="/public/images/amqey-logo.png" alt="" />
    //     <div>
    //       <a href="/cart">Track Order</a>
    //       <a href='/sell with us'>Sell With Us</a>
    //       <a href="/signin">Sign In</a>
    //     </div>
    //   </div>
    // </header>
    // </div>
  )
}
