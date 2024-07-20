import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { loginUser } from '../redux/actions/userActions';
import { Button, Form, Alert } from 'react-bootstrap';

const Login = () => {
  const [credentials, setCredentials] = useState({ username: '', password: '' });
  const [loginError, setLoginError] = useState('');
  const dispatch = useDispatch();

  const handleChange = e => {
    const { name, value } = e.target;
    setCredentials(prevState => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(loginUser(credentials))
      .then(() => setLoginError(''))
      .catch(error => setLoginError(error.message));
  };

  return (
    <Form onSubmit={handleSubmit} className="p-4 rounded shadow-sm bg-white">
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" name="username" value={credentials.username} onChange={handleChange} />
      </Form.Group>
      <Form.Group controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" value={credentials.password} onChange={handleChange} />
      </Form.Group>
      {loginError && <Alert variant="danger">{loginError}</Alert>}
      <Button variant="primary" type="submit" className="w-100 mt-3">Login</Button>
    </Form>
  );
};

export default Login;
