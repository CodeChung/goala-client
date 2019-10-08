import React from 'react';
import './Calendar.css';
import CalendarHeader from './CalendarHeader/CalendarHeader';
import CalendarDays from './CalendarDays/CalendarDays';
import CalendarView from './CalendarView/CalendarView';

class Calendar extends React.Component {
    state = {
        currentMonth: new Date().getMonth(),
        selectedDate: new Date(),
        data: null,
        date: null,
        entries: [],
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
    resetData() {
        console.log('reset')
        this.setState({ data: null })
    }
    openData(data) {
        this.setState({ data })
    }
    render() {
        const { data, date, currentMonth } = this.state
        if (data) {
            return (
                <CalendarView 
                    resetData={() => this.resetData()}
                    data={data}
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
                            Sun
                        </div>
                        <div className='weekday'>
                            Mon
                        </div>
                        <div className='weekday'>
                            Tue
                        </div>
                        <div className='weekday'>
                            Wed
                        </div>
                        <div className='weekday'>
                            Thu
                        </div>
                        <div className='weekday'>
                            Fri
                        </div>
                        <div className='weekday'>
                            Sat
                        </div>
                    </div>
                    <CalendarDays
                        openData={(date) => this.openData(date)}
                        currentMonth={currentMonth}
                        />
                </div>
            )
        }
        
    }
}

export default Calendar;