import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
// import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'
import './Header.styles.scss'

 const Header = ({ currentUser }) => { 
  return (
    <div className="header">
      <Link className="img-logo" to='/'>
        {/* <img src="https://res.cloudinary.com/amqey/image/upload/eml8mnn6ttb3gqq4pdbn.png" alt="" /> */}
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
    )
    }


      const mapStateToProps = state => ({
        currentUser: state.user.currentUser
      });

export default connect(mapStateToProps)(Header);