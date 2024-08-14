import { useState } from "react";
import Button from "../button/button";

import './sign-up-form.styles.scss';

import {
  createAuthUserDefault,
  createUserDocFromAuth,
} from "../../utils/firebase";
import FormInput from "../form-input/form-input";

const signUpFormFields = {
  displayName: "",
  email: "",
  password: "",
  confirmPassword: "",
};

const SignUpForm = () => {
  const [formFields, setFormFields] = useState(signUpFormFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password !== confirmPassword) {
      alert("error creating user: passwords do not match!");
      return;
    }

    try {
      const { user } = await createAuthUserDefault(email, password);
      await createUserDocFromAuth(user, { displayName });
    } catch (error) {
      alert(`Error: ${error.message}`);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormFields({ ...formFields, [name]: value });
  };

  return (
    <div className='sign-up-container'>
      <h2>Don't have an account yet?</h2>
      <span>Sign up with email and password</span>
      <form onSubmit={handleSubmit}>
        <FormInput
          label='username'
          type='text'
          required
          onChange={handleChange}
          name='displayName'
          autoComplete='username'
          value={displayName}
        />
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
        <FormInput
          label='confirm password'
          type='password'
          required
          onChange={handleChange}
          name='confirmPassword'
          value={confirmPassword}
          autoComplete='new-password'
        />
        <Button type='submit'>Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;
