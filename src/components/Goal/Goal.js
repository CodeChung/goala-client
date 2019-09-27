import React from 'react';
import './Goal.css';

class Goal extends React.Component {
    state={
        modal: false,
    }
    handleClick() {
        const { modal } = this.state
        this.setState({ modal: !modal })
    }
    render() {
        const { goal } = this.props
        return (
            <div 
                onClick={() => {
                    this.props.activateForm(goal.id)
                    this.props.toggleForm()
                }}
                className='goal'
                >
                <div className='goal-title'>
                    { goal.title }
                </div>
                <div className='goal-details'>
                    { 'goal id: ' + goal.id }
                    { 'action id: ' + goal.action_id }
                </div>
            </div>
        )
    }
}

export default Goal;