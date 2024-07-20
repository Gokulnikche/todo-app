import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from '../redux/actions/userActions';
import { Navbar as BootstrapNavbar, Nav, Button } from 'react-bootstrap';

const Navbar = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(state => state.user.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <BootstrapNavbar bg="light" expand="lg">
      <BootstrapNavbar.Brand href="#home">To-Do App</BootstrapNavbar.Brand>
      <BootstrapNavbar.Toggle aria-controls="basic-navbar-nav" />
      <BootstrapNavbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          {isAuthenticated ? (
            <Button variant="outline-danger" onClick={handleLogout}>Logout</Button>
          ) : (
            <Nav.Link href="#login">Login</Nav.Link>
          )}
        </Nav>
      </BootstrapNavbar.Collapse>
    </BootstrapNavbar>
  );
};

export default Navbar;
