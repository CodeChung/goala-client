import React from 'react';
import ReactDOM from 'react-dom';
import CalendarDays from './CalendarDays';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalendarDays />, div);
  ReactDOM.unmountComponentAtNode(div);
});
