import React from 'react';
import ReactDOM from 'react-dom';
import Checklist from './Checklist';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Checklist />, div);
  ReactDOM.unmountComponentAtNode(div);
});
