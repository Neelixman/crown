import React, { useState } from "react";

import FormInput from "../form-input/FormInput";
import CustomButton from "../custom-button/CustomButton";

import { SignInWithGoogle } from "../../firebase/firebase.utils";

import "./sign-in.scss";

function SignIn() {
  const [signInInfo, setSignInInfo] = useState({
    email: "",
    password: ""
  });

  const { email, password } = signInInfo;

  const handleSubmit = e => {
    e.preventDefault();

    setSignInInfo({ email, password });
  };

  const handleChange = e => {
    const { value, name } = e.target;

    setSignInInfo({ ...signInInfo, [name]: value });
  };

  return (
    <div className="sign-in">
      <h2>I already have an account.</h2>
      <span>Sign in with your email and password</span>

      <form onSubmit={e => handleSubmit(e)}>
        <FormInput
          handleChange={handleChange}
          name="email"
          type="email"
          value={email}
          label="email"
          required
        />
        <FormInput
          handleChange={handleChange}
          type="password"
          name="password"
          value={password}
          label="password"
          required
        />

        <div className="buttons">
          <CustomButton type="submit" value="Submit Form">
            Sign In
          </CustomButton>
          <CustomButton onClick={SignInWithGoogle} isGoogleSignIn={true}>
            Sign In With Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
