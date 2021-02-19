import React from 'react'
import SignIn from '../components/sign-in.component/sign-in'
import SignUp from '../components/sign-up/sign-up.component'

import './sign-in-sign-up.styles.scss';

function SignInAndSignOutPage() {
  return (
    <div className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </div>
  ) 
}

export default SignInAndSignOutPage
   