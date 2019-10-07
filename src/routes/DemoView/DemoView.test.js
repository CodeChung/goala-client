import React from 'react';
import ReactDOM from 'react-dom';
import DemoView from './DemoView';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DemoView />, div);
  ReactDOM.unmountComponentAtNode(div);
});
