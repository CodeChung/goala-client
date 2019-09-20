import React from 'react';
import ReactDOM from 'react-dom';
import MissingPage from './MissingPage';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<MissingPage/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
