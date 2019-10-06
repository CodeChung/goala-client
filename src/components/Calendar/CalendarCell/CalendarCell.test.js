import React from 'react';
import ReactDOM from 'react-dom';
import CalendarCell from './CalendarCell';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalendarCell />, div);
  ReactDOM.unmountComponentAtNode(div);
});
