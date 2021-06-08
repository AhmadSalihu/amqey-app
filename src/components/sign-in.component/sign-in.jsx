import React, { useState } from 'react'
import { Paper } from '@material-ui/core';
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux-store/user/user.actions';
import CustomButton from '../custom-button.component/CustomButton'
import FormInput from '../form-input.component/form-input';


import {
  SignInContainer,
  ButtonsBarContainer
} from '../sign-in.component/sign-in.styles';

import './signin-styles.scss';
import { withRouter } from 'react-router-dom';

const SignIn = ({ googleSignInStart, emailSignInStart, history }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: '',
    password: ''
  });

  const { email, password } = userCredentials;

  const handleSubmit = async event => {
    event.preventDefault();
    emailSignInStart(email, password);
    
  };
  
 const  handleChange = event => {
    const { value, name } = event.target;
    
    setUserCredentials({ ...userCredentials, [name]: value });
  };

    return (
      <SignInContainer>
      <Paper className="paper">
        <span>Sign in with your email and password</span>
        <form className="signin" onSubmit={handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={handleChange}
            value={email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={password}
            handleChange={handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
              <CustomButton type='submit'> Sign in </CustomButton>
              <br/>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                Sign In with Google
            </CustomButton>
              <br/>
            <CustomButton type="button" href="/signup" onClick={() => history.push('/signup')} registerButton>
                New on Amqey Sign Up
            </CustomButton>
          </ButtonsBarContainer>
          </form>
        </Paper>
      </SignInContainer>
    );
  }

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default withRouter(connect(null, mapDispatchToProps)(SignIn));