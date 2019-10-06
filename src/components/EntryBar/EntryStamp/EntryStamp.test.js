import React from 'react';
import ReactDOM from 'react-dom';
import EntryStamp from './EntryStamp';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryStamp />, div);
  ReactDOM.unmountComponentAtNode(div);
});
