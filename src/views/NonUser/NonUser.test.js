import React from 'react';
import ReactDOM from 'react-dom';
import NonUser from './NonUser';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><NonUser /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
