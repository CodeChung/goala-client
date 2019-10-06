import React from 'react';
import ReactDOM from 'react-dom';
import GoalListItem from './GoalListItem';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<BrowserRouter><GoalListItem goal={({})} /></BrowserRouter>, div);
  ReactDOM.unmountComponentAtNode(div);
});
