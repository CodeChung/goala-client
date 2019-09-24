import React from 'react';
import propTypes from 'prop-types';
import './Clock.css';

class Clock extends React.Component {
    state = {
        hour: 0,
        minute: 0,
        meridiem: true,
        error: ''
    }
    componentDidMount() {
        const { hour, minute, meridiem } = this.props
        this.setState({ hour, minute, meridiem })
    }
    toggleMeridiem() {
        const { meridiem } = this.state
        this.setState({ meridiem: !meridiem })
    }
    updateHour(event) {
        event.preventDefault()
        let error = ''
        const number = event.target.value
        if (number < 0) {
            error = 'value must be greater than or equal to 0'
        } else if (number > 12) {
            error = 'value must be less than or equal to 12'
        } else if ((number + 'a').startsWith('-')) {
            error = 'value cant start with negative'
        }
        if (error) {
            this.setState({ error })
        } else {
            this.setState({ hour: number })
        }
    }
    updateMinute(event) {
        event.preventDefault()
        let error = ''
        const number = event.target.value
        if (number < 0) {
            error = 'value must be greater than or equal to 0'
        } else if (number > 59) {
            error = 'value must be less than or equal to 59'
        } else if ((number + 'a').startsWith('-')) {
            error = 'value cant start with negative'
        }
        if (error) {
            this.setState({ error })
        } else {
            this.setState({ minute: number })
        }
    }
    render() {
        const { meridiem, hour, minute, error } = this.state
        return (
            <div className='block block-clock'>
                <h2>Clock</h2>
                <div className='clock-block block-main'>
                    <input onChange={(e) => this.updateHour(e)} type='number' value={hour} />
                    <input onChange={(e) => this.updateHour(e)} type='number' value={hour} />
                    :
                    <input onChange={(e) => this.updateMinute(e)} type='number' value={minute}/>
                    <input onChange={(e) => this.updateMinute(e)} type='number' value={minute}/>
                    <div className='meridiem' onClick={() => this.toggleMeridiem()}>
                        {meridiem ? 'am' : 'pm'}
                    </div>
                </div>
                {error}
            </div>
        )
    }
}

Clock.defaultProps = {
    value: propTypes.object
}

export default Clock;