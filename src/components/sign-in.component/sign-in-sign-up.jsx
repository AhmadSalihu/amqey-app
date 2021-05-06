import React from 'react'
import SignIn from './sign-in'

import { SingUpAndSignInComponent } from '../../Pages/sign-in-sign-up.styles.js';

function SignInAndSignOutPage() {
  return (
    <SingUpAndSignInComponent>
      <SignIn />
    </SingUpAndSignInComponent>
  ) 
}

export default SignInAndSignOutPage;
   