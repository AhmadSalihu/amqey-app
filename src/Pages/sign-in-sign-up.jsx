import React from 'react'
import SignIn from '../components/sign-in.component/sign-in'
import SignUp from '../components/sign-up/sign-up.component'

import { SingUpAndSignInComponent } from './sign-in-sign-up.styles.js';

function SignInAndSignOutPage() {
  return (
    <SingUpAndSignInComponent className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </SingUpAndSignInComponent>
  ) 
}

export default SignInAndSignOutPage;
   