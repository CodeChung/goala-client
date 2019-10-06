import React from 'react';
import ReactDOM from 'react-dom';
import CountDown from './CountDown';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CountDown />, div);
  ReactDOM.unmountComponentAtNode(div);
});
