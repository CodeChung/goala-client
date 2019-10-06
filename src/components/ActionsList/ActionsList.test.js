import React from 'react';
import ReactDOM from 'react-dom';
import ActionsList from './ActionsList';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionsList actions={[]} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
