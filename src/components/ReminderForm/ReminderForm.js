import React from 'react';
import './ReminderForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import RemindersService from '../../services/reminders-service';

class ReminderForm extends React.Component {
    state = {
        title: '',
        error: null,
        deleteReminderId: null,
        reminderTitle: null,
        
    }
    componentDidMount() {
        const title= this.props || ''
        const deleteReminderId = this.props.reminders[0] ? this.props.reminders[0].id : null
        this.setState({ title, deleteReminderId })
        
    }
    handleClick(event) {
        event.preventDefault()
        this.props.toggleForm()
    }
    createReminder = event => {
        event.preventDefault()
        const { title } = this.state
        RemindersService.createReminder(title)
            .then(res => this.setState({ reminders: res }))
            .catch(res => this.setState({ error: res.error }))
    }
    deleteReminder = event => {
        event.preventDefault()
        const { deleteReminderId } = this.state
        if (deleteReminderId) {
            RemindersService.deleteReminder(deleteReminderId)
                .then(res => this.setState({ reminders: res }))
                .catch(res => this.setState({ error: res.error }))
        }
    }
    updateDeleteReminder = (event) => {
        this.setState({ deleteReminderId: event.target.value })
    }
    updateReminderTitle = event => {
        this.setState({ title: event.target.value })
    }
    render() {
        const { title, error, } = this.state
        const { reminders } = this.props
        const options = reminders ? reminders.map(reminder => {
            return <option key={reminder.id} 
            value={reminder.id}>
            {reminder.title}</option>
        }) : ''
        return (
            <div className='reminder-form'>
                <FontAwesomeIcon 
                    className='entry-back-arrow' 
                    onClick={() => this.props.returnPage()} 
                    icon={faArrowAltCircleLeft} />
                <div className='reminder-settings'>
                    <div className='new-reminder'>
                        {error}
                        <form
                            onSubmit={this.createReminder}
                            >
                            <legend><h2>Add New Reminder</h2></legend>
                            <label>Title</label>
                            <input
                                value={title} 
                                onChange={this.updateReminderTitle}
                                />
                            <button>Add Reminder</button>
                        </form>
                    </div>
                    <div className='delete-reminder'>
                        <form
                            onSubmit={this.deleteReminder}
                            >
                            <legend><h2>Delete Reminder</h2></legend>
                            <select
                                onChange={this.updateDeleteReminder}
                                >
                                {options}
                            </select>
                            <button>Delete</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ReminderForm;