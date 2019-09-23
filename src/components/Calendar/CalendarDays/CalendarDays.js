import React from 'react';
import moment from 'moment';
import './CalendarDays.css';
import CalendarCell from '../CalendarCell/CalendarCell';

class CalendarDays extends React.Component {
    state = {
        days: [],
        refresh: false,
        offset: 0,
        count: 0,
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
    addCell(number) {
        let { days, count } = this.state
        if (count % 7 === 0) {
            days.push(<CalendarCell key={count} number={number} type='left-cell' />)
        } else {
            days.push(<CalendarCell key={count} number={number} type='' />)
        }
        console.log(count + 1)
        this.setState({
            count: count + 1,
            days,
        })
    }
    renderCells(currentMonth) {
        const { days } = this.state
        const monthOffset = moment().month(currentMonth).startOf('month').day()
        const monthLength = moment().month(currentMonth).daysInMonth()
        const monthOffsetEnd = monthOffset + monthLength

        // add in irrelevant month blocks
        for (let i = 0; i < monthOffset; i++) {
            this.addCell()
        }
        // we'll have a fetch request to query all entries with same month, then sort by date
        // map each day data with calendarcell component
        // fetch()
        //     .then(monthData => monthData.forEach(day => days.push(<CalendarCell key={} date={day.date})))
        for (let i = 1; i <= monthLength; i++) {
            this.addCell(i)
        }

        if (days.length % 7 !== 0) {
            const length = days.length
            for (let i = 0; i < 7 - length % 7; i++) {
                this.addCell()
            }
        }

        // for (let i = monthOffsetEnd; i < 35; i++) {
        //     days.push(<CalendarCell key={i + 1} />)
        // }
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