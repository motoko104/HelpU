import React from 'react';
import ReactDOM from 'react-dom';
import HelpCard from './HelpCard';

it('renders without crashing', () => {
  const helpCard = document.createElement('HelpCard');
  ReactDOM.render(<HelpCard />, helpCard);
  ReactDOM.unmountComponentAtNode(helpCard);
});