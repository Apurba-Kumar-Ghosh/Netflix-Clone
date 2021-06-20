import React, { useContext, useState } from "react";
import { HeaderContainer } from "../containers/header";
import { FooterContainer } from "../containers/footer";
import { Form } from "../components";
import * as Routes from "../constants/Routes";
import { useHistory } from "react-router-dom";
import { FirebaseContext } from "../context/firebase";

export default function Signin() {
  const history = useHistory();
  const { firebase } = useContext(FirebaseContext);
  const [error, setError] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const invalid = email === "" || password === "";

  function handleSubmit(e) {
    e.preventDefault();
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        setPassword("");
        setEmail("");
        setError("");
        history.push(Routes.BROWSE);
      })
      .catch((error) => setError(error.message));
  }
  return (
    <>
      <HeaderContainer>
        <Form>
          <Form.Title>Sign In</Form.Title>
          {error && <Form.Error>{error}</Form.Error>}
          <Form.Base onSubmit={handleSubmit}>
            <Form.Input
              type="email"
              value={email}
              placeholder="Email"
              onChange={({ target }) => setEmail(target.value)}
            />
            <Form.Input
              type="password"
              value={password}
              placeholder="Password"
              onChange={({ target }) => setPassword(target.value)}
            />
            <Form.Submit disabled={invalid}>Sign In</Form.Submit>
          </Form.Base>
          <Form.Text>
            New to Netflix?
            <Form.Link to={Routes.SIGN_UP}>Sign Up </Form.Link>
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
