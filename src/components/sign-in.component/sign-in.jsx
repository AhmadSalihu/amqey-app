import React from 'react'
import { auth, signInWithGoogle } from '../../Firebase/firebase.utils';
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


    handleSubmit  = async event => {
      event.preventDefault()
      const { email, password } = this.state;
      try {
        await auth.signInWithEmailAndPassword(email, password);
        this.setState({
          email: '',
          password: ''
        });
      } catch (error) {
        console.log(error);
        
      }
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
            label='Email'
             required />
            <FormInput 
            name='password' 
            type='password' 
            value={this.state.password}
            handleChange={this.handleChange}
            label="Password"
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