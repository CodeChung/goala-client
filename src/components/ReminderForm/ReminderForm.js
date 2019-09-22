import React from 'react';
import './ReminderForm.css';

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
                {!title && <label>Title</label>}
                <input
                    placeholder='Title'
                    value={title}
                    onChange={(e) => this.setState({ title: e.target.value })}
                    />
                <label>Time</label>
                <input
                    type='checkbox' />
                <label>Place</label>
                <input
                    type='checkbox' />
            </form>
        )
    }
}

export default ReminderForm;