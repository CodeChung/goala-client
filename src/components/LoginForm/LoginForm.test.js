import React from 'react';
import ReactDOM from 'react-dom';
import LoginForm from './LoginForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<LoginForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
