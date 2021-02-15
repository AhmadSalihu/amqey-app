import React from 'react'
import { signInWithGoogle } from '../../Firebase/firebase.utils';
import CustomButton from '../custom-button.component/CustomButton'
import FormInput from '../form-input.component/form-input';
import './sign-in.styles.scss';

 class SignIn extends React.Component {
   constructor() {
     super();
     this.state = {
       email: '',
       password: ''
     };
   }


    handleSubmit  = event => {
      event.preventDefault()
      this.setState({ email: '', password: '' })
  }

    handleChange = event => {
      const { value, name } = event.target;

      this.setState({ [name]: value })
    }

   render() {
     return (
       <div className="sign-in">
         <h2 className="">I already have an account</h2>
          <span className=''>Sign in with your email and passwordd</span>
          <form onSubmit={this.handleSubmit}>
            <FormInput 
            name='email' 
            type='email' 
            value={this.state.email}
            handleChange={this.handleChange}
            Label='email'
             required />
            <FormInput 
            name='password' 
            type='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            Label='password'
            required />
            <div className='buttons'>
            <CustomButton type='submit'>Sign In</CustomButton>
            <CustomButton onClick={signInWithGoogle} isGoogleSignIn>Sign With Google</CustomButton>
            </div>
          </form>
       </div>
     )
   }
 }



 export default SignIn