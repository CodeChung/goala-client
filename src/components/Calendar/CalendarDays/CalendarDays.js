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
            this.renderCells(this.props.currentMonth)
        }
    }
    renderCells(currentMonth) {
        const days = []
        const monthOffset = moment().month(currentMonth).startOf('month').day()
        const monthLength = moment().month(currentMonth).daysInMonth()
        const monthOffsetEnd = monthOffset + monthLength
        
        this.setState({ days })

        // add in irrelevant month blocks
        for (let i = 0; i < monthOffset; i++) {
            console.log(i)
            days.push(<CalendarCell key={i} />)
        }
        // we'll have a fetch request to query all entries with same month, then sort by date
        // map each day data with calendarcell component
        // fetch()
        //     .then(monthData => monthData.forEach(day => days.push(<CalendarCell key={} date={day.date})))
        for (let i = 1; i <= monthLength; i++) {
            console.log(i)
            days.push(<CalendarCell key={monthOffset + i} number={i} />)
        }

        for (let i = monthOffsetEnd; i < 35; i++) {
            console.log(i)
            days.push(<CalendarCell key={i + 1} />)
        }
        console.log(this.state.days, days)
        this.setState({ 
            days,
            refresh: true,
         })
    }
    render() {
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