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
        newUser: false,
        loading: true,
    }
    componentDidMount() {
        RemindersService.getReminders() 
            .then(reminders => {
                let recurringReminders = reminders.filter(reminder => reminder.schedule && reminder.schedule.schedule)
                let upcomingReminders = reminders.filter(reminder => reminder.schedule && reminder.schedule.date)
                let unscheduledReminders = reminders.filter(reminder => !!!reminder.schedule)
                let newUser = reminders.length === 0
                this.setState({ reminders, recurringReminders, unscheduledReminders, upcomingReminders, newUser, loading: false })
            })
            .catch(res => this.setState({ error: res.error, loading: false }))
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
        this.setState({ activeReminder })
    }
    updateReminderTitle = (reminderId, title) => {
        const { reminders } = this.state
        reminders.forEach(reminder => {
            if (reminder.id === reminderId) {
                reminder.title = title
            }
        })
        this.setState({ reminders })
    }
    render() {
        const { loading, newUser, formActive, activeReminder, recurringReminders, settingsActive,  unscheduledReminders, upcomingReminders} = this.state
        if (formActive) {
            return (
                <section className='reminders-page'>
                    <BlocksPage 
                        updateReminderTitle={this.updateReminderTitle}
                        reminder={activeReminder}
                        blockSequence={activeReminder.block_sequence}  
                        toggleForm={() => this.toggleForm()} />
                </section>
            )
        }

        if (loading) {
            return (
                <section className='reminders-page'>
                    <div className='reminders-newbie'>
                        Please sir be patient I am loading 
                    </div>
                </section>
            )
        }
        
        if (settingsActive) {
            return (
                <section className='reminders-page'>
                    <ReminderForm reminders={[...recurringReminders, ...upcomingReminders, ...unscheduledReminders]} returnPage={() => this.toggleSettings()} />
                </section>
            )
        }

        let recurringReminderComponents = recurringReminders.map((reminder) => {
            return <Reminder 
                        title={reminder.title}
                        activateReminder={(id) => this.activateForm(id)}
                        reminder={reminder} 
                        key={reminder.id} 
                        schedule={reminder.schedule}
                        toggleForm={() => this.toggleForm()} />
        })
        let upcomingReminderComponents = upcomingReminders.map((reminder) => {
            return <Reminder 
                        title={reminder.title}
                        activateReminder={(id) => this.activateForm(id)}
                        reminder={reminder} 
                        key={reminder.id} 
                        schedule={reminder.schedule}
                        toggleForm={() => this.toggleForm()} />
        })
        let unscheduledReminderComponents = unscheduledReminders.map((reminder) => {
            return <Reminder 
                        title={reminder.title}
                        activateReminder={(id) => this.activateForm(id)}
                        reminder={reminder} 
                        key={reminder.id} 
                        schedule={reminder.schedule}
                        toggleForm={() => this.toggleForm()} /> 
        })
        let reminderView = newUser ? 
            (<div className='reminders-newbie'>
                <p>
                    Hey there, user!
                    <br />
                    Feel free to add a reminder below
                </p>
                <p>
                    You can keep track of it in your journal.
                </p>
                <div className='settings-arrow'>
                    &#8595;
                </div>
            </div>)
            :
            (<div className='reminders-list'>
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
            </div>)
            
        
        return (
            <section className='reminders-page'>
                {reminderView}
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