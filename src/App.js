import React, { useState } from 'react';
import { Container, Navbar, Nav, Button, Form, Alert } from 'react-bootstrap';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { useSelector, useDispatch } from 'react-redux';
import { loginUser, logoutUser } from './redux/actions/userActions';

const App = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);
  const dispatch = useDispatch();

  const handleLogin = () => {
    if (username && password) {
      dispatch(loginUser({ username, password }))
        .then(() => setLoginError(''))
        .catch(error => setLoginError(error.message));
    } else {
      setLoginError('Please enter both username and password');
    }
  };

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="#home">To-Do App</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#tasks">Tasks</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="mt-5">
        {isAuthenticated ? (
          <>
            <TaskInput />
            <TaskList />
            <Button variant="secondary" className="mt-3" onClick={handleLogout}>
              Logout
            </Button>
          </>
        ) : (
          <div className="text-center">
            <h4>LOGIN TO YOUR ACCOUNT</h4>
            <Form>
              {loginError && <Alert variant="danger">{loginError}</Alert>}
              <Form.Group controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </Form.Group>

              <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Form.Group>

              <Button variant="primary" onClick={handleLogin}>
                Login
              </Button>
            </Form>
          </div>
        )}
      </Container>
    </div>
  );
};

export default App;
