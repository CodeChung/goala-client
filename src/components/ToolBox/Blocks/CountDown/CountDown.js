import React from 'react';
import propTypes from 'prop-types';
import './CountDown.css';

class CountDown extends React.Component {
    state = {
        count: 99
    }
    componentDidMount() {
        const { value } = this.props
        if (value.count) {
            this.setState({ count: value.count })
        }
    }
    render() {
        const { count } = this.state
        return (
            <div className='block-countdown'>
                <h2>Countdown</h2>
                <input
                    type='number'
                    value={count}
                    />
                days
            </div>
        )
    }
}

CountDown.defaultProps = {
    value: propTypes.object
}

export default CountDown;