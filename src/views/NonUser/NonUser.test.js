import React from 'react';
import ReactDOM from 'react-dom';
import NonUser from './NonUser';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NonUser />, div);
  ReactDOM.unmountComponentAtNode(div);
});
