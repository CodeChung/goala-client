import React from 'react';
import './SettingsForm.css'

class SettingsForm extends React.Component {
    state = {
        title: '',
        days: {
            Sun: false,
            Mon: false,
            Tue: false,
            Wed: false,
            Thu: false,
            Fri: false,
            Sat: false,
        },
        error: '',
    }
    renderDayClass(day) {
        return this.state[day] ? 'add-day' : 'add-day active-day'
    }
    switchActiveDay(day) {
        const active = this.state[day] ? false : true
        const { days } = this.state
        days[day] = active
        this.setState({days})
    }
    submitGoal(event) {
        event.preventDefault()
        const { title, days } = this.state
        const validSchedule = Object.keys(days).filter(day => days[day]).length

        if (!title) {
            const error = 'Goal must have title'
            this.setState({error})
        } else if (!validSchedule) {
            const error = 'Must choose at least one day'
            this.setState({error})
        } else {
            let schedule = ''
            days.forEach(day => {
                if (days[day]) {
                    schedule += day + '/'
                }
            })
            schedule.trim('/')
            const goal = {
                title,
                schedule
            }
            this.props.addGoal(goal)
            this.setState({error: ''})
        }
    }
    render() {
        const days = Object.keys(this.state.days).map((day, index) => 
            <button 
                key={index}
                type='button'
                name='add-goal-schedule day'
                onClick= {() => this.switchActiveDay(day)}
                className={this.renderDayClass(day)}>{day}</button>
        )
        return (
            <form className='add-goal-form'>
                <legend>Change Goal Settings</legend>
                <label htmlFor='add-goal-title'>
                    Title
                </label>
                <input
                    onChange={(e) => this.setState({title: e.target.value})}
                    required
                    name='add-goal-title'
                    id='add-goal-title'
                    />
                <label htmlFor='goal-hours'>
                    Target Hours:
                </label>
                <input
                    name='goal-hours'
                    id='goal-hours'
                    />
                <div className='add-goal-schedule'>
                    <label htmlFor='add-schedule'>
                        Schedule
                    </label>
                    {days}
                </div>
                {this.state.error}
                <button 
                    disabled={this.state.error}
                    type='submit'>
                    Apply
                </button>
            </form>
        )
    }
}

export default SettingsForm;