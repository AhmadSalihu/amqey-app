import React from 'react'


import { HeaderContainer, OptionLink, OptionsContainer, SignInAndRegisterContainer } from './Header.styles.jsx'
const Header = () => {
  return (
    <HeaderContainer>
    <SignInAndRegisterContainer>
    <OptionLink to='/register'>Register</OptionLink>
    <OptionLink to='/login'>Login</OptionLink>
    </SignInAndRegisterContainer>
   <OptionsContainer>
      <OptionLink to='/sell_with_us'>
        Sell With Us
      </OptionLink> 
      <OptionLink to='/tract_order'>
      Track Order
      </OptionLink>
      </OptionsContainer>
    </HeaderContainer>
    )
    }

export default Header;