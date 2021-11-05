import React, { useContext, useState, useEffect } from "react";
import { StateContext } from "../Contexts";
import { useResource } from "react-request-hook";

import { Modal, Form, Button } from "react-bootstrap";

export default function Login({ show, handleClose }) {
  const { dispatch } = useContext(StateContext); // Take dispatch from StateContext
  const [username, setUsername] = useState("");

  const [loginFailed, setLoginFailed] = useState(false);
  const [password, setPassword] = useState("");

  function handleUsername(evt) {
    setUsername(evt.target.value);
  }

  function handlePassword(evt) {
    setPassword(evt.target.value);
  }

  // Retrieve information from db.jason
  const [user, login] = useResource((username, password) => ({
    url: `/login/${encodeURI(username)}/${encodeURI(password)}`,
    method: "get",
  }));

  // Track to see if it's a fail or successful log in
  useEffect(() => {
    if (user && user.data) {
      if (user.data.length > 0) {
        // If server gives us something back
        setLoginFailed(false);
        dispatch({ type: "LOGIN", username: user.data[0].username });
      } else {
        setLoginFailed(true); // Display an error message like below
      }
    }
  }, [user]);

  return (
    <Modal show={show} onHide={handleClose}>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          login(username, password);
          handleClose();
        }}
      >
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* Onsubmit prevent browsers to refresh the page */}
          <Form.Label htmlFor="login-username">Username:</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={handleUsername}
            name="login-username"
            id="login-username"
          />
          <Form.Label htmlFor="login-password">Password:</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={handlePassword}
            name="login-password"
            id="login-password"
          />
          {loginFailed && (
            <Form.Text style={{ color: "red" }}>
              Invalid username or password
            </Form.Text>
          )}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="primary"
            disabled={username.length === 0}
            type="submit"
          >
            Login
          </Button>
        </Modal.Footer>
      </Form>
    </Modal>
  );
}
