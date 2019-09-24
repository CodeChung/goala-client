import React from 'react';
import Reminder from '../../components/Reminder/Reminder';
import ReminderForm from '../../components/ReminderForm/ReminderForm';
import './ReminderPage.css';

class RemindersPage extends React.Component {
    state = {
        formActive: false,
    }
    componentDidMount() {
        // this is where I'll fetch reminders
        // reminder data for recurring and upcoming
        // map these into a list of Reminder components passed down reminder as prop
        // also pass down ReminderForm component the reminder obj data as a prop so it has it's settings saved when loaded.

        // reminder model:
        // {
        //     title,
        //     date,
        //     time,
        //     etc,
        // }
    }
    toggleForm() {
        const { formActive } = this.state
        this.setState({
            formActive: !formActive
        })
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
        return (
            <section className='reminders-page'>
                <h1>RemindersPage</h1>
                <h2>Recurring</h2>
                {/* These reminder components will actually be passed down entire reminder data objects  */}
                <Reminder data={{title:'hi', date:1, time: 1}} toggleForm={() => this.toggleForm()} />
                <h2>Upcoming</h2>
                <Reminder data={{title:'hi', date:1, time: 1}} toggleForm={() => this.toggleForm()}/>
                <Reminder data={{title:'hi', date:1, time: 1}} toggleForm={() => this.toggleForm()}/>
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