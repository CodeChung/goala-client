import React from 'react';
import ReactDOM from 'react-dom';
import Weekly from './Weekly';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Weekly />, div);
  ReactDOM.unmountComponentAtNode(div);
});
