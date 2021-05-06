import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { Paper } from '@material-ui/core'

import { signUpStart } from '../../redux-store/user/user.actions'

import CustomButton from '../custom-button.component/CustomButton';
import FormInput from '../form-input.component/form-input';


import { SignUpContainer } from './sign-up.styles';
import './formStyles.scss';

class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      displayName: '',
      email: '',
      phoneNumber: '',
      password: '',
      confirmPassword: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { signUpStart } = this.props;
    const { displayName, email, phoneNumber, password, confirmPassword } = this.state;

    if (password !== confirmPassword) {
      alert("passwords don't match");
      return;
    }
    signUpStart({ email, phoneNumber, password, displayName })
  };

  handleChange = event => {
    const { name, value } = event.target;

    this.setState({ [name]: value });
  };
  
  
  render() {
    const { displayName, email, phoneNumber, password, confirmPassword } = this.state;
    const { history } = this.props;
    return (
      <SignUpContainer>
      <Paper className="paper">
        <span>Sign up with your email, phone Number and password</span>
        <form className='sign-up-form' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='email'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
            />
          <FormInput
            type='phoneNumber'
            name='phoneNumber'
            value={phoneNumber}
            onChange={this.handleChange}
            label='Phone Number'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
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
};

const mapDispatchToProps = dispatch => ({
  signUpStart: (userCredentials) => dispatch(signUpStart(userCredentials))
})

export default withRouter(connect(null, mapDispatchToProps)(SignUp));