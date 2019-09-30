import React from 'react';
import moment from 'moment';
import './CalendarDays.css';
import CalendarCell from '../CalendarCell/CalendarCell';
import EntriesService from '../../../services/entries-service';

class CalendarDays extends React.Component {
    state = {
        activeDays: {},
        days: [],
        entries: [],
        refresh: false,
        offset: 0,
    }
    componentDidMount() {
        const { currentMonth } = this.props

        EntriesService.getEntriesByMonth(currentMonth)
            .then(entries => {
                let activeDays = {}
                entries.forEach((entry, index) => {
                    const day = moment(entry.date).format('DD')
                    activeDays[day] = index
                })

                const days = this.renderCells(currentMonth, activeDays, entries)

                this.setState({ entries, activeDays, days })
            })
    }
    componentDidUpdate(prevProps) {
        if (this.props.currentMonth !== prevProps.currentMonth) {
            EntriesService.getEntriesByMonth(this.props.currentMonth)
                .then(entries => {
                    let activeDays = {}
                    entries.forEach((entry, index) => {
                        const day = moment(entry.date).format('DD')
                        activeDays[day] = index
                    })

                    const days = this.renderCells(this.props.currentMonth, activeDays, entries)
                    this.setState({ entries, activeDays, days })
                })
        }
    }
    addCell(activeDays, entries, array, number) {
        let type = array.length % 7 ? '' : 'left-cell'
        let cell = number && activeDays[number] 
            ? <CalendarCell 
                data={entries[activeDays[number]]} 
                openData={(data) => this.props.openData(data)} 
                key={array.length} 
                number={number} 
                type={type} 
                /> 
            : <CalendarCell 
                openData={(data) => this.props.openData(data)} 
                key={array.length} 
                number={number} 
                type={type} />
        return cell
    }
    renderCells(currentMonth, activeDays, entries) {
        const monthOffset = moment().month(currentMonth).startOf('month').day()
        const monthLength = moment().month(currentMonth).daysInMonth()
        const monthOffsetEnd = monthOffset + monthLength
        let cells = []
        // add in irrelevant month blocks
        for (let i = 0; i < monthOffset; i++) {
            cells.push(this.addCell(activeDays, entries, cells))
        }
        // we'll have a fetch request to query all entries with same month, then sort by date
        // map each day data with calendarcell component
        // fetch()
        //     .then(monthData => monthData.forEach(day => days.push(<CalendarCell key={} date={day.date})))
        for (let i = 1; i <= monthLength; i++) {
            cells.push(this.addCell(activeDays, entries, cells, i))
        }

        if (cells.length % 7 !== 0) {
            const length = cells.length
            for (let i = 0; i < 7 - length % 7; i++) {
                cells.push(this.addCell(activeDays, entries, cells))
            }
        }

        return cells
    }
    render() {
        const { days } = this.state

        return (
            <div className='calendar-days'>
                {days}
            </div>
        )
    }
}

export default CalendarDays;