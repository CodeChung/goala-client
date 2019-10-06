import React from 'react';
import ReactDOM from 'react-dom';
import ActionTools from './ActionTools';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ActionTools />, div);
  ReactDOM.unmountComponentAtNode(div);
});
