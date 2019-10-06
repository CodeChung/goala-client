import React from 'react';
import ReactDOM from 'react-dom';
import EntryPage from './EntryPage';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EntryPage date={new Date()} />, div);
  ReactDOM.unmountComponentAtNode(div);
});
