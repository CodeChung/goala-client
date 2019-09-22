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
        const { data } = this.props
        return (
            <div 
                onClick={() => this.props.toggleForm()}
                className='reminder'
                >
                <div className='reminder-title'>
                    { data.title }
                </div>
                <div className='reminder-details'>
                    { data.date && <ReminderDate date={data.date} /> }
                    { data.time && <ReminderTime time={data.time} /> }
                </div>
            </div>
        )
    }
}

export default Reminder;