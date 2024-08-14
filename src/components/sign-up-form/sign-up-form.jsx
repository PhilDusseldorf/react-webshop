import { useState } from "react";

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
    <div>
      <h1>Sign up with email and password</h1>
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
        <button type='submit'>submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
