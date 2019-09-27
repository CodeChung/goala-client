import React from 'react';
import Reminder from '../../components/Reminder/Reminder';
import './ActionsPage.css';
import BlocksPage from '../BlocksPage/BlocksPage';
import ActionsService from '../../services/actions-service';
import GoalsService from '../../services/goals-service';

class ActionsPage extends React.Component {
    state = {
        actions: [],
        goals: [],
        formActive: false,
        error: false,
        loading: false,
    }
    componentDidMount() {
        ActionsService.getActions()
            .then(actions => {
                this.setState({ actions })
                GoalsService.getGoals()
                    .then(goals => this.setState({ goals }))
            })
            .catch(res => this.setState({ error: res.error }))
    }
    toggleForm() {
        const { formActive } = this.state
        this.setState({
            formActive: !formActive
        })
    }
    render() {
        const { formActive, actions, goals } = this.state
        if (formActive) {
            return (
                <section className='reminders-page'>
                    {/* <ReminderForm toggleForm={() => this.toggleForm()} /> */}
                    <BlocksPage toggleForm={() => this.toggleForm()} />
                </section>
            )
        }

        let actionList = actions.map(action => {
            const goalList = goals.filter(goal => goal.action_id === action.id).map(
                goal => <div 
                        key={goal.id}
                        className='goal'>
                        {goal.title}
                    </div> 
            )
            return (
                <div 
                    key={action.id}
                    className='action'>
                    <h3>{action.title}</h3>
                    {goalList}
                </div>
                )
            })
        return (
            <section className='reminders-page'>
                <h1>ActionsPage</h1>

                <div className='actions'>
                    {actionList}
                </div>

                <h2>Recurring</h2>
                {/* These reminder components will actually be passed down entire reminder data objects  */}
                <Reminder data={{title:'eating healthy', date:1, time: 1}} toggleForm={() => this.toggleForm()} />
                <h2>Upcoming</h2>
                <Reminder data={{title:'rock climbing', date:1, time: 1}} toggleForm={() => this.toggleForm()}/>
                <Reminder data={{title:'budgeting', date:1, time: 1}} toggleForm={() => this.toggleForm()}/>
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

export default ActionsPage;