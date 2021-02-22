import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'
import './Header.styles.scss'
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
 const Header = ({ currentUser, hidden }) => { 
  return (
    <div className="header">
      <Link className="img-logo" to='/'>
       <Logo className='logo' /> 
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