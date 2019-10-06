import React from 'react';
import ReactDOM from 'react-dom';
import RemindersPage from './RemindersPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<RemindersPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
