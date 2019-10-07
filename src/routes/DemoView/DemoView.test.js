import React from 'react';
import ReactDOM from 'react-dom';
import DemoView from './DemoView';
import { BrowserRouter } from 'react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><DemoView /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
