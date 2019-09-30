import React from 'react';
import './EntryBar.css';
import GoalsService from '../../services/goals-service';
import moment from 'moment';

class EntryBar extends React.Component {
    state = {
        goals: []
    }
    componentDidMount() {
        const weekdays = ['Su', 'M', 'Tu', 'W', 'Th', 'F', 'Sa']
        const { date } = this.props
        if (date) {
            const day = weekdays[moment(date).day()]
            GoalsService.getGoalsByDay(day)
                .then(goals => this.setState({ goals }))
        }
    }
    render() {
        const { goals } =  this.state
        return (
            <div className='entry-bar'>
                <div className='entry-bar-goals'>
                    <h4>Goals</h4>
                    {/* {goals} */}
                </div>
                <span className='entry-bar-split' />
                <div className='entry-bar-reminders'>
                    <h4>Reminders</h4>
                </div>
            </div>
        )
    }
}

export default EntryBar;