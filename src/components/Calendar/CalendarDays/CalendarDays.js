import React from 'react';
import moment from 'moment';
import './CalendarDays.css';
import CalendarCell from '../CalendarCell/CalendarCell';

class CalendarDays extends React.Component {
    state = {
        days: [],
        refresh: false,
        offset: 0,
    }
    componentDidMount() {
        const { currentMonth } = this.props
        this.renderCells(currentMonth)
    }
    componentDidUpdate(prevProps) {
        if (prevProps.currentMonth !== this.props.currentMonth) {
            console.log('newmonth')
            this.setState({ refresh: true })
        }
    }
    renderCells(currentMonth) {
        const days = []
        const monthOffset = moment().month(currentMonth).startOf('month').day()
        const monthLength = moment().month(currentMonth).daysInMonth()
        const monthOffsetEnd = monthOffset + monthLength
        
        // add in irrelevant month blocks
        for (let i = 0; i < monthOffset; i++) {
            days.push(<CalendarCell key={i} />)
        }
        // we'll have a fetch request to query all entries with same month, then sort by date
        // map each day data with calendarcell component
        // fetch()
        //     .then(monthData => monthData.forEach(day => days.push(<CalendarCell key={} date={day.date})))
        for (let i = 1; i <= monthLength; i++) {
            days.push(<CalendarCell key={monthOffset + 1} number={i} />)
        }

        for (let i = monthOffsetEnd; i < 35; i++) {
            days.push(<CalendarCell key={i} />)
        }
    
        this.setState({ days })
    }
    render() {
        const dateFormat = 'dddd';
        const { days } = this.state
        
        // const endOfWeek = weeks.map( (week, index) => week.endOf('month').format('YYYY-MM-DD') )
        return (
            <div className='calendar-days'>
                {days}
            </div>
        )
    }
}

export default CalendarDays;