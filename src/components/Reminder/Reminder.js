import React from 'react';
import './Reminder.css';

class Reminder extends React.Component {
    state={
        modal: false,
        reminder: { title: '', id: null },
    }
    componentDidMount() {
        const { reminder } = this.props
        if (reminder) {
            this.setState({ reminder })
        }
    }
    handleClick() {
        const { modal } = this.state
        this.setState({ modal: !modal })
    }
    render() {
        const { reminder } = this.state
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