import { Paper } from '@material-ui/core';
import React from 'react'
import { connect } from 'react-redux';
import { googleSignInStart, emailSignInStart } from '../../redux-store/user/user.actions';
import CustomButton from '../custom-button.component/CustomButton'
import FormInput from '../form-input.component/form-input';


import {
  SignInContainer,
  ButtonsBarContainer
} from '../sign-in.component/sign-in.styles';

import './signin-styles.scss';

class SignIn extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { emailSignInStart } = this.props;
    const { email, password } = this.state;
    emailSignInStart(email, password);
    
  };
  
  handleChange = event => {
    const { value, name } = event.target;
    
    this.setState({ [name]: value });
  };
  
  render() {
    const { googleSignInStart } = this.props;
    return (
      <SignInContainer>
      <Paper className="paper">
        <span>Sign in with your email and password</span>
        <form className="signin" onSubmit={this.handleSubmit}>
          <FormInput
            name='email'
            type='email'
            handleChange={this.handleChange}
            value={this.state.email}
            label='email'
            required
          />
          <FormInput
            name='password'
            type='password'
            value={this.state.password}
            handleChange={this.handleChange}
            label='password'
            required
          />
          <ButtonsBarContainer>
            <CustomButton type='submit'> Sign in </CustomButton>
            <CustomButton type="button" onClick={googleSignInStart} isGoogleSignIn>
                Sign In with Google
            </CustomButton>
          </ButtonsBarContainer>
          </form>
        </Paper>
      </SignInContainer>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  googleSignInStart: () => dispatch(googleSignInStart()),
  emailSignInStart: (email, password) => dispatch(emailSignInStart({ email, password}))
})

export default connect(null, mapDispatchToProps)(SignIn);