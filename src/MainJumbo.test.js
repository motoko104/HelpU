import React from 'react';
import ReactDOM from 'react-dom';
import MainJumbo from './MainJumbo';

it('renders without crashing', () => {
  const Jumbotron = document.createElement('Jumbotron');
  ReactDOM.render(<MainJumbo />, Jumbotron);
  ReactDOM.unmountComponentAtNode(Jumbotron);
});