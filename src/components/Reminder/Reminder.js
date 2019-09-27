import React from 'react';
// import ReminderDate from './ReminderDate/ReminderDate';
// import ReminderTime from './ReminderTime/ReminderTime';
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
        const { reminder } = this.props
        return (
            <div 
                onClick={() => {
                    this.props.activateReminder(reminder.id)
                    this.props.toggleForm()
                }}
                className='reminder'
                >
                <div className='reminder-title'>
                    { reminder.title }
                </div>
                <div className='reminder-details'>
                    { 'reminder id: ' + reminder.id }
                    { 'reminder '}
                </div>
            </div>
        )
    }
}

export default Reminder;