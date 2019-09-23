import React from 'react';
import './Calendar.css';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';
import CalendarView from './CalendarView/CalendarView';

class Calendar extends React.Component {
    state = {
        currentMonth: new Date().getMonth(),
        selectedDate: new Date(),
        date: null,
    }
    nextMonth() {
        const { currentMonth } = this.state
        const newMonth = currentMonth >= 11 ? 0 : currentMonth + 1
        this.setState({
            currentMonth: newMonth,
        })
    }
    prevMonth() {
        const { currentMonth } = this.state
        const newMonth = currentMonth <= 0 ? 11 : currentMonth - 1
        this.setState({
            currentMonth: newMonth,
        })
    }
    resetDate() {
        console.log('reset')
        this.setState({ date: null })
    }
    openDate(date) {
        this.setState({ date })
    }
    render() {
        const { date, currentMonth } = this.state
        if (date) {
            return (
                <CalendarView 
                    resetDate={() => this.resetDate()}
                    date={date} />
            )
        } else {
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
                        openDate={(date) => this.openDate(date)}
                        currentMonth={currentMonth}
                        />
                </div>
            )
        }
        
    }
}

export default Calendar;