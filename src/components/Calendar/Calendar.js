import React from 'react';
import './Calendar.css';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';

class Calendar extends React.Component {
    state = {
        currentMonth: new Date().getMonth(),
        selectedDate: new Date(),
        refresh: false
    }
    renderDays() {}
    renderCells() {}
    onDateClick = day => {}
    nextMonth() {
        const { currentMonth } = this.state
        const newMonth = currentMonth >= 11 ? 0 : currentMonth + 1
        this.setState({
            currentMonth: newMonth,
            refresh: true
        })
    }
    prevMonth() {
        const { currentMonth } = this.state
        const newMonth = currentMonth <= 0 ? 11 : currentMonth - 1
        this.setState({
            currentMonth: newMonth,
            refresh: true
        })
    }
    render() {
        const { currentMonth } = this.state
        return (
            <div className='calendar'>
                <CalendarHeader 
                    currentMonth={currentMonth}
                    nextMonth={() => this.nextMonth()}
                    prevMonth={() => this.prevMonth()}
                    />
                <div className='calendar-weekdays'>
                    <div className='weekday'>
                        Sunday
                    </div>
                    <div className='weekday'>
                        Monday
                    </div>
                    <div className='weekday'>
                        Tuesday
                    </div>
                    <div className='weekday'>
                        Wednesday
                    </div>
                    <div className='weekday'>
                        Thursday
                    </div>
                    <div className='weekday'>
                        Friday
                    </div>
                    <div className='weekday'>
                        Saturday
                    </div>
                </div>
                <CalendarDays 
                    currentMonth={currentMonth}
                    />
                {this.renderCells()}
            </div>
        )
    }
}

export default Calendar;