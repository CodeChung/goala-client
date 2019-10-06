import React from 'react';
import ReactDOM from 'react-dom';
import BaseBlock from './BaseBlock';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BaseBlock />, div);
  ReactDOM.unmountComponentAtNode(div);
});
