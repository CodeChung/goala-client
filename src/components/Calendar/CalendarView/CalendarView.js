import React from 'react';
import './CalendarView.css';

class CalendarView extends React.Component {
    render() {
        return (
            <div className='calendar-view'>
                <button
                    onClick={() => this.props.resetDate()}
                >
                    Back arrow</button>
                {this.props.date.toString()}
            </div>
        )
    }
}

export default CalendarView