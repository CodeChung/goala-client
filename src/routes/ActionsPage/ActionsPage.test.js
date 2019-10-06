import React from 'react';
import ReactDOM from 'react-dom';
import ActionsPage from './ActionsPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionsPage />, div);
  ReactDOM.unmountComponentAtNode(div);
});
