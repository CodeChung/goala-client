import React from 'react';
import './CalendarView.css';
import EntryPage from '../../../routes/EntryPage/EntryPage';

class CalendarView extends React.Component {
    render() {
        return (
            <div className='calendar-view'>
                <EntryPage data={this.props.data} date={this.props.date} resetDate={() => this.props.resetDate()} />
            </div>
        )
    }
}

export default CalendarView