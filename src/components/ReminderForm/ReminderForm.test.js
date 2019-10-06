import React from 'react';
import ReactDOM from 'react-dom';
import ReminderForm from './ReminderForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReminderForm reminders={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
