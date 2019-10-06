import React from 'react';
import ReactDOM from 'react-dom';
import User from './User';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><User /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
