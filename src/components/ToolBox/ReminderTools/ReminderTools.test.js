import React from 'react';
import ReactDOM from 'react-dom';
import ReminderTools from './ReminderTools';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReminderTools />, div);
  ReactDOM.unmountComponentAtNode(div);
});
