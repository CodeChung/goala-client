import React from 'react';
import ReactDOM from 'react-dom';
import EntryBar from './EntryBar';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryBar />, div);
  ReactDOM.unmountComponentAtNode(div);
});
