import React from 'react';
import ReactDOM from 'react-dom';
import Date from './Date';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Date />, div);
  ReactDOM.unmountComponentAtNode(div);
});

