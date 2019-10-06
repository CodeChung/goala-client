import React from 'react';
import ReactDOM from 'react-dom';
import ReminderForm from './ReminderForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ReminderForm />, div);
  ReactDOM.unmountComponentAtNode(div);
});
