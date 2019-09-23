import React from 'react';
import './ReminderForm.css';
import ReminderTools from '../ToolBox/ReminderTools/ReminderTools';

class ReminderForm extends React.Component {
    state = {
        title: ''
    }
    componentDidMount() {
        const { title } = this.props
        this.setState({ title })
    }
    handleClick(event) {
        event.preventDefault()
        this.props.toggleForm()
    }
    render() {
        const { title } = this.state
        return (
            <form className='reminder-form'>
                <button 
                    onClick={(e) => this.handleClick(e)}>
                    back
                </button>
                {title}
                <ReminderTools />
            </form>
        )
    }
}

export default ReminderForm;