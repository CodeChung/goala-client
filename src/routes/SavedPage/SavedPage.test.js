import React from 'react';
import ReactDOM from 'react-dom';
import SavedPage from './SavedPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SavedPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
