import React from 'react';
import ReactDOM from 'react-dom';
import NavBar from './Navbar';

it('renders without crashing', () => {
  const Navbar = document.createElement('Navbar');
  ReactDOM.render(<NavBar />, Navbar);
  ReactDOM.unmountComponentAtNode(Navbar);
});