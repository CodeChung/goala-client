import React from 'react';
import ReactDOM from 'react-dom';
import Trash from './Trash';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Trash />, div);
  ReactDOM.unmountComponentAtNode(div);
});
