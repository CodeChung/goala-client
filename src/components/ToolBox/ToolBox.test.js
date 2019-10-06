import React from 'react';
import ReactDOM from 'react-dom';
import ToolBox from './ToolBox';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ToolBox/>, div);
  ReactDOM.unmountComponentAtNode(div);
});
