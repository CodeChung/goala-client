import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import './Date.css';

class Date extends React.Component {
    state = {
        date: null,
        day: 1,
        month: 1,
        year: 1,
    }
    componentDidMount() {
        const { value } = this.props
        const date = value.date || new Date()
        const day = moment(date).format('DD')
        const month = moment(date).format('MMMM')
        const year = moment(date).format('YYYY')

        this.setState({ date, day, month, year })
    }
    handleDay = event => {
        this.setState({ day: event.target.value })
    }
    handleMonth = event => {
        this.setState({ month: event.target.value })
    }
    handleYear = event => {
        this.setState({ year: event.target.value })
    }
    render() {
        const { day, month, year } = this.state
        return (
            <div className='block block-date'>
                <input
                    onChange={this.handleMonth}
                    className='block-date-month'
                    value={month}
                    />
                <input
                    onChange={this.handleMonth}
                    className='block-date-day'
                    value={day}
                    />
                <input
                    onChange={this.handleMonth}
                    className='block-date-year'
                    value={year}
                    />
            </div>
        )
    }
}

Date.defaultProps = {
    value: propTypes.object
}

export default Date;