import React from 'react'
import { Link } from 'react-router-dom'
import './GoalListItem.css'

class GoalListItem extends React.Component {
    render() {
        const { goal } = this.props
        return (
            <Link to={`/goal/${goal.id}`} 
                onClick={this.props.hideNav}
                className='goal-list-item'>
                <header className='goal-list-header'>
                    <h2>
                        {goal.title}
                    </h2>
                    <div className='goal-list-duration'>{goal.duration} days left</div>
                </header>
                <footer>
                    <span className='goal-list-schedule'>Schedule: {goal.schedule}</span>
                    <span className='goal-list-date'>Last Log: {goal.last_logged || 'New Goal!'}</span>
                </footer>
            </Link>
        )
    }
}

export default GoalListItem