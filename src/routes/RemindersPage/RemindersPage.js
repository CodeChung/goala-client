import React from 'react';
import Reminder from '../../components/Reminder/Reminder';
import ReminderForm from '../../components/ReminderForm/ReminderForm';
import RemindersService from '../../services/reminders-service';
import './ReminderPage.css';

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
        const { formActive } = this.state
        if (formActive) {
            return (
                <section className='reminders-page'>
                    <ReminderForm toggleForm={() => this.toggleForm()} />
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
                <h1>RemindersPage</h1>
                <h2>Upcoming</h2>
                {upcomingReminderComponents}
                <h2>Recurring</h2>
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