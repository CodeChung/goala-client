import React from 'react';
import './CalendarHeader.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class CalendarHeader extends React.Component {
    render() {
        const dateFormat = 'MMMM YYYY';
        
        return (
            <div className='calendar-header'>
                <div className="">
                    <div className="icon" onClick={this.props.prevMonth}>
                        Prev
                    </div>
                </div>
                <div className="">
                    <span>
                    {months[this.props.currentMonth]}
                    </span>
                </div>
                <div className="" onClick={this.props.nextMonth}>
                    <div className="icon">
                        Next
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarHeader;