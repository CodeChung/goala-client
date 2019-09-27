import React from 'react';
import ReminderDate from './ReminderDate/ReminderDate';
import ReminderTime from './ReminderTime/ReminderTime';
import './Reminder.css';

class Reminder extends React.Component {
    state={
        modal: false,
    }
    handleClick() {
        const { modal } = this.state
        this.setState({ modal: !modal })
    }
    render() {
        const { goal } = this.props
        return (
            <div 
                onClick={() => {
                    this.props.activateGoal(goal.id)
                    this.props.toggleForm()
                }}
                className='reminder'
                >
                <div className='reminder-title'>
                    { goal.title }
                </div>
                <div className='reminder-details'>
                    { 'goal id: ' + goal.id }
                    { 'action id: ' + goal.action_id}
                </div>
            </div>
        )
    }
}

export default Reminder;