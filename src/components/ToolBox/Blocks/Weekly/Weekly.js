import React from 'react';
import propTypes from 'prop-types';
import './Weekly.css';

class Weekly extends React.Component {
    state = {
        Su: false,
        M: false,
        Tu: false,
        W: false,
        Th: false,
        F: false,
        Sa: false,
    }
    componentDidMount() {
        if (this.props.value.days) {
            const days = this.props.value.days
            const state = {}
            Object.keys(this.state).forEach(key => {
                console.log(key, days)
                if (days.includes(key)) {
                    state[key] = true
                }
            })

            this.setState(state)
        }
    }
    toggleDay(day) {
        const val = this.state[day]
        this.setState({ [day]: !val })
    }
    render() {
        return (
            <div className='block block-weekly'>
                <h3>Weekly Schedule</h3>
                <div className='weekly-board'>
                    <div className={'weekly-day weekly-day-left ' + (this.state.Su && 'day-active')}
                        onClick={() => this.toggleDay('Su')}
                        >
                        Su
                    </div>
                    <div className={'weekly-day ' + (this.state.M && 'day-active')}
                        onClick={() => this.toggleDay('M')}
                        >
                        M
                    </div>
                    <div className={'weekly-day ' + (this.state.Tu && 'day-active')}
                        onClick={() => this.toggleDay('Tu')}
                        >
                        Tu
                    </div>
                    <div className={'weekly-day ' + (this.state.W && 'day-active')}
                        onClick={() => this.toggleDay('W')}
                        >
                        W
                    </div>
                    <div className={'weekly-day ' + (this.state.Th && 'day-active')}
                        onClick={() => this.toggleDay('Th')}
                        >
                        Th
                    </div>
                    <div className={'weekly-day ' + (this.state.F && 'day-active')}
                        onClick={() => this.toggleDay('F')}
                        >
                        F
                    </div>
                    <div className={'weekly-day weekly-day-right ' + (this.state.Sa && 'day-active')}
                        onClick={() => this.toggleDay('Sa')}
                        >
                        Sa
                    </div>
                </div>
            </div>
        )
    }
}

Weekly.defaultProps = {
    value: propTypes.exact({
        Su: propTypes.bool,
        M: propTypes.bool,
        Tu: propTypes.bool,
        W: propTypes.bool,
        Th: propTypes.bool,
        F: propTypes.bool,
        Sa: propTypes.bool,
    })
}

export default Weekly;