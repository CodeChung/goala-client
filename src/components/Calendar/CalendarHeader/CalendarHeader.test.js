import React from 'react';
import ReactDOM from 'react-dom';
import CalendarHeader from './CalendarHeader';


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CalendarHeader />, div);
  ReactDOM.unmountComponentAtNode(div);
});
