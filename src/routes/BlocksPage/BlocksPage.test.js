import React from 'react';
import ReactDOM from 'react-dom';
import BlocksPage from './BlocksPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BlocksPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
