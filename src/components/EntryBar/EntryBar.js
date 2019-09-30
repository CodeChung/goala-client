import React from 'react';
import './EntryBar.css';
import GoalsService from '../../services/goals-service';
import moment from 'moment';
import EntryStamp from './EntryStamp/EntryStamp';
import RemindersService from '../../services/reminders-service';

class EntryBar extends React.Component {
    state = {
        goals: [],
        reminders: []
    }
    componentDidMount() {
        const weekdays = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
        const { date } = this.props
        if (date) {
            const day = weekdays[moment(date).day()]
            const dateFormatted = moment(date).format('MMM-DD-YYYY')
            GoalsService.getGoalsByDay(day)
                .then(goals => this.setState({ goals }))

            RemindersService.getRemindersByDate(dateFormatted)
                .then(reminders => this.setState({ reminders }))
            
            RemindersService.getRemindersByDay(day)
                .then(reminders => {
                    debugger
                    const currentReminders = [...this.state.reminders, ...reminders]
                    this.setState({ reminders: currentReminders })
                })
        }
    }
    render() {
        const { goals, reminders } =  this.state
        const goalsTiles = goals.map((goal, index) => <EntryStamp title={goal.title} />)
        const remindersTiles = reminders.map((reminder, index) => <EntryStamp title={reminder.title} />)
        return (
            <div className='entry-bar'>
                <div className='entry-bar-section entry-bar-goals'>
                    <h4>Goals</h4>
                    <div className='entry-tiles'>
                        {goalsTiles}
                    </div>
                </div>
                <span className='entry-bar-split' />
                <div className='entry-bar-section entry-bar-reminders'>
                    <h4>Reminders</h4>
                    <div className='entry-tiles'>
                        {remindersTiles}
                    </div>
                </div>
            </div>
        )
    }
}

export default EntryBar;