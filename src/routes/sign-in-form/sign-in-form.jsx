import {
  createUserDocFromAuth,
  signInWithGooglePopup,
  signInDefault,
} from "../../utils/firebase";
import Button from "../../components/button/button";
import FormInput from "../../components/form-input/form-input";
import { useState } from "react";

import "./sign-in-form.styles.scss";
import GoogleSignInButton from "../../components/google-sign-in-button/google-sign-in-button";

const signInFormFields = {
  email: "",
  password: "",
};

const SignInForm = () => {
  const [formFields, setFormFields] = useState(signInFormFields);
  const { email, password } = formFields;

  const logGoogleUser = async () => {
    const { user } = await signInWithGooglePopup();
    const userDocRef = await createUserDocFromAuth(user);
  };

  const resetFormFields = () => {
    setFormFields(signInFormFields);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };

  const handleSignIn = () => {
    const promise = signInDefault(email, password);
    console.log(promise);
    resetFormFields();
  };

  return (
    <div className='sign-in-container'>
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={handleSignIn}>
        <FormInput
          label='email'
          type='email'
          required
          onChange={handleChange}
          name='email'
          autoComplete='email'
          value={email}
        />
        <FormInput
          label='password'
          type='password'
          required
          onChange={handleChange}
          name='password'
          value={password}
          autoComplete='new-password'
        />
        <div className='buttons-container'>
          <Button type='submit'>Sign In</Button>
          <GoogleSignInButton onClick={logGoogleUser}></GoogleSignInButton>
        </div>
      </form>
    </div>
  );
};

export default SignInForm;
