import React from 'react';
import moment from 'moment';
import propTypes from 'prop-types';
import './Date.css';

class Date extends React.Component {
    state = {
        date: null,
        day: null,
        month: null,
        year: null,
    }
    componentDidMount() {
        const { value } = this.props
        const date = value.date
        const day = moment(date).format('DD')
        const month = moment(date).format('MMMM')
        const year = moment(date).format('YYYY')

        this.setState({ date, day, month, year })
    }
    render() {
        const { day, month, year } = this.state
        return (
            <div className='block block-date'>
                <input
                    className='block-date-month'
                    value={month}
                    />
                <input
                    className='block-date-day'
                    value={day}
                    />
                <input
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