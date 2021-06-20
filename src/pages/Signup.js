import React, { useState, useContext } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as Routes from "../constants/Routes";
import { FirebaseContext } from "../context/firebase";
import { useHistory } from "react-router-dom";

export default function Signup() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [errorState, setError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const invalid = firstName === "" || emailAddress === "" || password === "";
  function handleSubmit(e) {
    e.preventDefault();

    firebase
      .auth()
      .createUserWithEmailAndPassword(emailAddress, password)
      .then((result) =>
        result.user
          .updateProfile({
            Name: firstName,
            photoURL: Math.floor(Math.random() * 5) + 1,
          })
          .then(() => {
            setEmailAddress("");
            setPassword("");
            setError("");
            history.push(Routes.BROWSE);
          })
      )
      .catch((error) => setError(error.message));
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign Up</Form.Title>
          {errorState && <Form.Error>{errorState}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              type="text"
              value={firstName}
              placeholder="First Name"
              onChange={({ target }) => setFirstName(target.value)}
            />
            <Form.Input
              type="email"
              value={emailAddress}
              placeholder="Email"
              onChange={({ target }) => setEmailAddress(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={invalid}>Sign Up</Form.Submit>
          </Form.Base>
          <Form.Text>
            Already a user?
            <Form.Link to={Routes.SIGN_IN}>Sign In </Form.Link>
            Now!
          </Form.Text>
          <Form.TextSmall>
            This page is protected by Google reCAPTCHA.
          </Form.TextSmall>
        </Form>
      </HeaderContainer>
      <FooterContainer />
    </>
  );
}
