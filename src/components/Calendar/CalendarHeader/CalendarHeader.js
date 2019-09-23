import React from 'react';
import './CalendarHeader.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class CalendarHeader extends React.Component {
    render() {
        return (
            <div className='calendar-header'>
                <div className="">
                    <div className="calendar-icon" onClick={this.props.prevMonth}>
                        Prev
                    </div>
                </div>
                <div className="">
                    <span className='current-month'>
                    {months[this.props.currentMonth]}
                    </span>
                </div>
                <div className="" onClick={this.props.nextMonth}>
                    <div className="calendar-icon">
                        Next
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarHeader;