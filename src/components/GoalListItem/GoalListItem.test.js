import React from 'react';
import ReactDOM from 'react-dom';
import GoalListItem from './GoalListItem';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<GoalListItem />, div);
  ReactDOM.unmountComponentAtNode(div);
});
