import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import './CalendarHeader.css';

const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

class CalendarHeader extends React.Component {
    render() {
        return (
            <div className='calendar-header'>
                <div className="">
                    <div className="calendar-icon icon-left" onClick={this.props.prevMonth}>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </div>
                <div className="current-month">
                    <span className='current-month'>
                    {months[this.props.currentMonth]}
                    </span>
                </div>
                <div className="" onClick={this.props.nextMonth}>
                    <div className="calendar-icon icon-right">
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
        )
    }
}

export default CalendarHeader;