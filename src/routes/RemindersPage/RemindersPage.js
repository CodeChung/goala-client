import React from 'react';
import Reminder from '../../components/Reminder/Reminder';
import ReminderForm from '../../components/ReminderForm/ReminderForm';
import RemindersService from '../../services/reminders-service';
import './ReminderPage.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import BlocksPage from '../BlocksPage/BlocksPage';

class RemindersPage extends React.Component {
    state = {
        activeReminder: null,
        unscheduledReminders: [],
        upcomingReminders: [],
        recurringReminders: [],
        formActive: false,
        settingsActive: false,
    }
    componentDidMount() {
        RemindersService.getReminders() 
            .then(reminders => {
                let recurringReminders = reminders.filter(reminder => reminder.schedule && reminder.schedule.schedule)
                let upcomingReminders = reminders.filter(reminder => reminder.schedule && reminder.schedule.date)
                let unscheduledReminders = reminders.filter(reminder => !!!reminder.schedule)
                this.setState({ reminders, recurringReminders, unscheduledReminders, upcomingReminders })
            })
            .catch(res => this.setState({ error: res.error }))
    }
    toggleForm() {
        const { formActive } = this.state
        this.setState({
            formActive: !formActive
        })
    }
    toggleSettings() {
        const { settingsActive } = this.state
        this.setState({
            settingsActive: !settingsActive
        })
    }
    activateForm(reminderId) {
        const { upcomingReminders, recurringReminders, unscheduledReminders } = this.state
        const activeReminder = [...upcomingReminders, ...unscheduledReminders, ...recurringReminders]
            .find(reminder => reminder.id === reminderId)
        debugger
        this.setState({ activeReminder })
    }
    render() {
        const { reminders } = this.props
        const { formActive, activeReminder, recurringReminders, settingsActive,  unscheduledReminders, upcomingReminders} = this.state
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
        
        if (settingsActive) {
            return (
                <section className='reminders-page'>
                    <ReminderForm reminders={[...recurringReminders, ...upcomingReminders, ...unscheduledReminders]} returnPage={() => this.setState({ formActive: false })} />
                </section>
            )
        }

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
        let unscheduledReminderComponents = unscheduledReminders.map((reminder) => {
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
                <div className='reminder-header'>
                    <h2>Unscheduled</h2>
                </div>
                {unscheduledReminderComponents}
                <button
                    className='add-reminder'
                    onClick={() => this.toggleSettings()}
                    >
                    <FontAwesomeIcon icon={faTools} />
                </button>
            </section>
        )
    }
}

export default RemindersPage;