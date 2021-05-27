import React, { useState } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Paper } from '@material-ui/core'

import { signUpStart } from '../../redux-store/user/user.actions'

import CustomButton from '../custom-button.component/CustomButton';
import FormInput from '../form-input.component/form-input';


import { SignUpContainer, SignUpTitle } from './sign-up.styles';
import './formStyles.scss';

const SignUp = ({ history, signUpStart }) => {
  const [userCredentials, setUserCredentials] = useState({
      displayName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    })
    
  const { displayName, email, phoneNumber, password, confirmPassword } = userCredentials;
  const handleSubmit = async event => {
    event.preventDefault();


    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ email, phoneNumber, password, displayName })
  };

  const handleChange = event => {
    const { name, value } = event.target;

    setUserCredentials({ ...userCredentials, [name]: value });
  };
  

    return (
      <SignUpContainer>
      <Paper className="paper">
        <SignUpTitle>Sign up using email, phone number and password</SignUpTitle>
        <form className='sign-up-form' onSubmit={handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={handleChange}
            label='Email'
            required
            />
          <FormInput
            type='phoneNumber'
            name='phoneNumber'
            value={phoneNumber}
            onChange={handleChange}
            label='Phone Number'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={handleChange}
            label='Confirm Password'
            required
          />
          <div className="button-display">
            <div>
            <span  className="spantag">New To Amqey</span>
              <CustomButton type='submit' isGoogleSignIn>SIGN UP</CustomButton>
            </div>
            <div>
          <span  className="spantag">Already Have an Account</span>  
          <CustomButton onClick={() => history.push('/signin')}>SIGN IN</CustomButton>
          </div>
        </div>
        </form>
    </Paper>
  </SignUpContainer>
    );
  }

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default withRouter(connect(null, mapDispatchToProps)(SignUp)); 