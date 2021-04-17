import React from 'react'
import { connect } from 'react-redux'

// import { ReactComponent as Logo } from '../../assets/crown.svg';
import { auth } from '../../Firebase/firebase.utils'

import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { HeaderContainer, LogoContainer, OptionLink, OptionsContainer, LogoImage } from './Header.styles.jsx';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../redux-store/user/user.selector';
import { selectCartHidden } from '../../redux-store/cart/cart.selectors';


 const Header = ({ currentUser, hidden }) => { 
  return (
    <HeaderContainer>
      <LogoContainer to='/'>
       <LogoImage src='/favicon.ico.png' alt="" className='logo' /> 
      </LogoContainer>
      <OptionsContainer>
      <OptionLink to='/shop'>
        Shop
      </OptionLink>
      <OptionLink to='/sell with us'>
        Sell On Amqey
      </OptionLink> 
      {
        currentUser ? (
        <OptionLink  as='div' onClick={() => auth.signOut()}>Sign Out</OptionLink>   
        ) : (
        <OptionLink to='/signin'>Sign In</OptionLink>
            )}
        <CartIcon />
      </OptionsContainer>
      {
        hidden ? null : <CartDropdown />
      }
    </HeaderContainer>
    )
    }


const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser,
  hidden: selectCartHidden
});

export default connect(mapStateToProps)(Header);