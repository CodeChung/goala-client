import React from 'react';
import './CalendarPage.css';
import Calendar from '../../components/Calendar/Calendar';

class CalendarPage extends React.Component {
    render() {
        return (
            <section className='calendar-page'>
                <Calendar />
            </section>
        )
    }
}

export default CalendarPage;