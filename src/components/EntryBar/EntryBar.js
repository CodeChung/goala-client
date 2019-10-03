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
                    const currentReminders = [...this.state.reminders, ...reminders]
                    this.setState({ reminders: currentReminders })
                })
        }
    }
    render() {
        const { date } = this.props
        const { goals, reminders } =  this.state
        const goalsTiles = goals.map((goal) => 
            <EntryStamp 
                date={date}
                key={`goal-${goal.id}`}
                addTile={(goal) => this.props.addTile(goal, date)} 
                title={goal.title} 
                goal={goal} />)
        const remindersTiles = reminders.map((reminder) => 
            <EntryStamp 
                date={date}
                key={`reminder-${reminder.id}`} 
                addTile={(reminder) => this.props.addTile(reminder, date)} 
                title={reminder.title}
                reminder={reminder} />
        )
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