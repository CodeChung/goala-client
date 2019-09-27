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
    // componentDidUpdate(prevProps) {
    //     if (prevProps.currentMonth !== this.props.currentMonth) {
    //         let days = []
    //         this.setState({ refresh: true, days })
    //         console.log('i updated', this.props.currentMonth, days, this.state.days)
    //         this.renderCells(this.props.currentMonth)
    //     }
    // }
    addCell(array, number) {
        if (array.length % 7 === 0) {
            return (<CalendarCell openDate={(date) => this.props.openDate(date)} key={array.length} number={number} type='left-cell' />)
        } else {
            return (<CalendarCell key={array.length} number={number} type='' />)
        }
    }
    renderCells(currentMonth) {
        const { days } = this.state
        const monthOffset = moment().month(currentMonth).startOf('month').day()
        const monthLength = moment().month(currentMonth).daysInMonth()
        const monthOffsetEnd = monthOffset + monthLength

        let cells = []

        console.log(monthOffset, monthLength, monthOffsetEnd)
        // add in irrelevant month blocks
        for (let i = 0; i < monthOffset; i++) {
            cells.push(this.addCell(cells))
        }
        // we'll have a fetch request to query all entries with same month, then sort by date
        // map each day data with calendarcell component
        // fetch()
        //     .then(monthData => monthData.forEach(day => days.push(<CalendarCell key={} date={day.date})))
        for (let i = 1; i <= monthLength; i++) {
            cells.push(this.addCell(cells, i))
        }

        if (cells.length % 7 !== 0) {
            const length = cells.length
            for (let i = 0; i < 7 - length % 7; i++) {
                cells.push(this.addCell(cells))
            }
        }

        return cells
    }
    render() {
        const { currentMonth } = this.props
        const days = this.renderCells(currentMonth)
        
        // const endOfWeek = weeks.map( (week, index) => week.endOf('month').format('YYYY-MM-DD') )
        return (
            <div className='calendar-days'>
                {days}
            </div>
        )
    }
}

export default CalendarDays;