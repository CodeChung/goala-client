import React from 'react';
import ReactDOM from 'react-dom';
import GoalForm from './GoalForm';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoalForm actions={([])} goals={([])} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
