import React from 'react';
import ReactDOM from 'react-dom';
import SearchPage from './SearchPage'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<SearchPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
