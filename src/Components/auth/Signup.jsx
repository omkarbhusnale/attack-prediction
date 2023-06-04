import { Link } from "react-router-dom";
import React, { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import {
  Button,
  Form,
  Grid,
  Header,
  Message,
  Segment,
} from "semantic-ui-react";
import { auth } from "../../utils/firebase";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signUp = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((useCredential) => {
        console.log(useCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <Grid textAlign="center" style={{ height: "100vh" }} verticalAlign="middle">
      <Grid.Column style={{ maxWidth: 450 }}>
        <Form size="large" onSubmit={signUp}>
          <Segment stacked>
            <Header
              as="h2"
              color="purple"
              textAlign="center"
              content="Create Account"
              style={{ marginBottom: "32px" }}
            />
            <Form.Group widths="equal">
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                autoComplete="firstname"
              />
              <Form.Input
                fluid
                icon="user"
                iconPosition="left"
                autoComplete="lastname"
              />
            </Form.Group>
            <Form.Input
              fluid
              icon="mail"
              iconPosition="left"
              autoComplete="username"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Input
              fluid
              icon="lock"
              iconPosition="left"
              autoComplete="current-password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button
              type="submit"
              color="purple"
              fluid
              size="large"
              style={{ marginBottom: "32px" }}
            >
              Sign up
            </Button>
          </Segment>
        </Form>
        <Message>
          Already Have Account?
          <br />
          <Link to="/login">Sign in</Link>
        </Message>
      </Grid.Column>
    </Grid>
  );
};
export default Signup;
