import React from 'react';
import './GoalForm.css';

class GoalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            title: '',
            duration: 1,
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
            button: 'Add Goal',
            formTitle: 'New Goal',
            rerender: false,
        }
    }
    switchActiveDay(day) {
        const active = this.state[day] ? false : true
        const { days } = this.state
        days[day] = active
        console.log(days)
        this.setState({days})
    }
    submitGoal(event) {
        event.preventDefault()
        const { title, days, duration } = this.state
        const validSchedule = Object.keys(days).filter(day => days[day]).length

        if (!title) {
            const error = 'Goal must have title'
            this.setState({error})
        } else if (!validSchedule) {
            const error = 'Must choose at least one day'
            this.setState({error})
        } else {
            const goal = {
                title,
                schedule: days,
                duration
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
                className={this.state.days[day] ? 'add-day' : 'add-day active-day'}>{day}</button>
        )
        return (
            <form 
                className='add-goal-form' 
                onSubmit={(e) => this.submitGoal(e)} >
                <legend>{this.props.formTitle || this.state.formTitle}</legend>
                <label htmlFor='add-goal-title'>
                    Title
                </label>
                <input
                    onChange={(e) => this.setState({title: e.target.value})}
                    required
                    name='add-goal-title'
                    id='add-goal-title'
                    />
                <div className='add-goal-schedule'>
                    <label htmlFor='add-schedule'>
                        Schedule
                    </label>
                    {days}
                </div>
                <label htmlFor='add-goal-duration'>
                    Days to Complete
                </label>
                <input
                    onChange={(e) => this.setState({duration: e.target.value})}
                    required
                    name='add-goal-duration'
                    id='add-goal-duration'
                    type='number'
                    />
                {this.state.error}
                <button 
                    disabled={this.state.error}
                    type='submit'>
                    {this.props.button || this.state.button}
                </button>
            </form>
        )
    }
}

export default GoalForm;