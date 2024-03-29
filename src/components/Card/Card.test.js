import React from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';
import { BrowserRouter } from 'react-router-dom';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Card date={new Date()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
