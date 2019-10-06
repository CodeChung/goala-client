import React from 'react';
import './Goal.css';
import moment from 'moment';

class Goal extends React.Component {
    state={
        modal: false,
        goal: {},
    }
    componentDidMount() {
        const { goal } = this.props
        if (goal) {
            this.setState({ goal })
        }
    }
    handleClick() {
        const { modal } = this.state
        this.setState({ modal: !modal })
    }
    render() {
        const { goal } = this.state
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
                    {/* { 'goal id: ' + goal.id }
                    { 'action id: ' + goal.action_id } */}
                    { `Last Logged: ${moment(goal.last_logged).format('MM-DD-YY')}`}
                </div>
            </div>
        )
    }
}

export default Goal;