import React from 'react';
import Reminder from '../../components/Reminder/Reminder';
import ReminderForm from '../../components/ReminderForm/ReminderForm';
import RemindersService from '../../services/reminders-service';
import './ReminderPage.css';
import BlocksPage from '../BlocksPage/BlocksPage';

class RemindersPage extends React.Component {
    state = {
        activeReminder: null,
        upcomingReminders: [],
        recurringReminders: [],
        formActive: false,
    }
    componentDidMount() {
        RemindersService.getReminders() 
            .then(reminders => {
                let recurringReminders = reminders.filter(reminder => reminder.schedule.schedule)
                let upcomingReminders = reminders.filter(reminder => reminder.schedule.date)

                this.setState({ recurringReminders, upcomingReminders })
            })
            .catch(res => this.setState({ error: res.error }))
    }
    toggleForm() {
        const { formActive } = this.state
        this.setState({
            formActive: !formActive
        })
    }
    activateForm(reminderId) {
        const { upcomingReminders, recurringReminders } = this.state
        const activeReminder = [...upcomingReminders, ...recurringReminders]
            .find(reminder => reminder.id === reminderId)
        this.setState({ activeReminder })
    }
    render() {
        const { formActive, activeReminder } = this.state
        if (formActive) {
            return (
                <section className='reminders-page'>
                        <BlocksPage
                            reminder={activeReminder}
                            blockSequence={activeReminder.block_sequence}  
                            toggleForm={() => this.toggleForm()} />
                </section>
            )
        }
        
        const { recurringReminders, upcomingReminders } = this.state
        let recurringReminderComponents = recurringReminders.map((reminder) => {
            return <Reminder 
                        activateReminder={(id) => this.activateForm(id)}
                        reminder={reminder} 
                        key={reminder.id} 
                        schedule={reminder.schedule}
                        toggleForm={() => this.toggleForm()} />
        })
        let upcomingReminderComponents = upcomingReminders.map((reminder) => {
            return <Reminder 
                        activateReminder={(id) => this.activateForm(id)}
                        reminder={reminder} 
                        key={reminder.id} 
                        schedule={reminder.schedule}
                        toggleForm={() => this.toggleForm()} />
        })
        return (
            <section className='reminders-page'>
                <div className='reminder-header'>
                    <h2>Upcoming</h2>
                </div>
                {upcomingReminderComponents}
                <div className='reminder-header'>
                    <h2>Recurring</h2>
                </div>
                {recurringReminderComponents}
                <button
                    className='add-reminder'
                    onClick={() => this.toggleForm()}
                    >
                    +
                </button>
            </section>
        )
    }
}

export default RemindersPage;