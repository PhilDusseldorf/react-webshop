import SignUpForm from "../../components/sign-up-form/sign-up-form";
import { createUserDocFromAuth, signInWithGooglePopup } from "../../utils/firebase";

const SignIn = () => {
    const logGoogleUser = async () => {
        const {user} = await signInWithGooglePopup();
        const userDocRef = await createUserDocFromAuth(user);
    }

  return (
    <div>
      <h1>Sign-in page</h1>
      <button onClick={logGoogleUser}>Sign in with Google Popup</button>
      <SignUpForm></SignUpForm>
    </div>
  );
};

export default SignIn;
