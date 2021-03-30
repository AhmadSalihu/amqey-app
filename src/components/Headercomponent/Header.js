import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';


import './Header.styles.scss'


 const Header = ({ currentUser, hidden }) => { 
  return (
    <div className="header color-white">
      <Link className="img-logo" to='/'>
       <Logo className='logo' /> 
      </Link>
      <div className="options">
      <Link className="option" to='/shop'>
        Shop
      </Link>
      <Link className="option" to='/sell with us'>
        Sell On Lumo
      </Link> 
      {
        currentUser ? (
        <div className="option" onClick={() => auth.signOut()}>Sign Out</div>   
        ) : (
        <Link className="option" to='/signin'>Sign In</Link>
            )}
        <CartIcon />
      </div>
      {
        hidden ? null : <CartDropdown />
      }
    </div>
    )
    }


const mapStateToProps = ({user: { currentUser }, cart:  { hidden }}) => ({
  currentUser,
  hidden
      });

export default connect(mapStateToProps)(Header);