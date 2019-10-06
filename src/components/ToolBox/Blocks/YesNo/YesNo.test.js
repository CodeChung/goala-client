import React from 'react';
import ReactDOM from 'react-dom';
import YesNo from './YesNo';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<YesNo />, div);
  ReactDOM.unmountComponentAtNode(div);
});
