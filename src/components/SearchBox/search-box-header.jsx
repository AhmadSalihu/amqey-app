import React from 'react'
import { Link } from 'react-router-dom'
import CartIcon from '../cart-icon/cart-icon.component'

import * as TiIcons from 'react-icons/ti';
import * as BiIcons from 'react-icons/bi';
import * as BsIcons from 'react-icons/bs';

import { selectCurrentUser } from '../../redux-store/user/user.selector';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { signOutStart } from '../../redux-store/user/user.actions';

import { LogoContainer, LogoImage } from '../Headercomponent/Header.styles';

import './search-box-header.styles.scss';


const SearchBox = ({ currentUser, signOutStart, searchChange }) => {

  return (
    <>
      <div className="search-header">
        <div>
        <LogoContainer to='/'>
        <LogoImage src='/favicon.ico.png' alt="" className='logo' /> 
        </LogoContainer>
      </div>
        <div className="search-container">       
          <input className='search-box' type="search" placeholder="Search products, brands and categories" />
          {/* <BsIcons.BsSearch /> */} {/* <FiIcons.FiSearch className="fi" /> */} 
          <div as="button" className="search-button">search</div>
        </div>
        <div className="search-icon">
         <CartIcon />
        </div>
          <div className="user-login">
          {
            currentUser ? (
          <Link as='div' onClick={signOutStart}><TiIcons.TiUserAdd  className='ti'/></Link>   
          ) : (
          <Link to='/signin'><BiIcons.BiUserPlus className='bi'/></Link>
            )}
        </div>
        </div> 
    </>
  )
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

const mapDispatchToProps = dispatch => ({
  signOutStart: () => dispatch(signOutStart())
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchBox)