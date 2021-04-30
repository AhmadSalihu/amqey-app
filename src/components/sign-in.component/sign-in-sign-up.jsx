import React from 'react'
import SignIn from './sign-in'
import SignUp from '../sign-up/sign-up.component'

import { SingUpAndSignInComponent } from '../../Pages/sign-in-sign-up.styles.js';
import { Paper } from '@material-ui/core';

function SignInAndSignOutPage() {
  return (
      <Paper>
    <SingUpAndSignInComponent className="sign-in-and-sign-up">
      <SignIn />
      <SignUp />
    </SingUpAndSignInComponent>
    </Paper>
  ) 
}

export default SignInAndSignOutPage;
   