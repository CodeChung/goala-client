import React from 'react';
import './ReminderForm.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
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
                <FontAwesomeIcon 
                    className='reminder-toggle' 
                    onClick={(e) => this.handleClick(e)} 
                    icon={faArrowAltCircleLeft} />
                {title}
                <ReminderTools />
            </form>
        )
    }
}

export default ReminderForm;