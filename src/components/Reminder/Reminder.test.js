import React from 'react';
import ReactDOM from 'react-dom';
import Reminder from './Reminder';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Reminder />, div);
  ReactDOM.unmountComponentAtNode(div);
});
