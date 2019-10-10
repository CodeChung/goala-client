import React from 'react';
import './ActionsPage.css';
import BlocksPage from '../BlocksPage/BlocksPage';
import ActionsService from '../../services/actions-service';
import GoalsService from '../../services/goals-service';
import Goal from '../../components/Goal/Goal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTools } from '@fortawesome/free-solid-svg-icons';
import GoalForm from '../../components/GoalForm/GoalForm';

class ActionsPage extends React.Component {
    state = {
        activeGoal: null,
        newGoal: false,
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
    activateForm(goalId) {
        const { goals } = this.state
        const activeGoal = goals.find(goal => goal.id === goalId)
        this.setState({ activeGoal })
    }
    toggleForm() {
        const { formActive } = this.state
        this.setState({
            formActive: !formActive
        })
    }
    addGoal() {
        const { newGoal } = this.state
        this.setState({ newGoal: !newGoal })
    }
    updateGoalTitle = (goalId, title) => {
        const { goals } = this.state
        goals.forEach(goal => {
            if (goal.id === goalId) {
                goal.title = title
            }
        })
        this.setState({ goals })
    }
    render() {
        const { activeGoal, formActive, actions, goals, newGoal } = this.state
        if (formActive) {
            return (
                <section className='actions-page'>
                    <BlocksPage 
                        updateGoalTitle={this.updateGoalTitle}
                        goal={activeGoal}
                        blockSequence={activeGoal.block_sequence}  
                        toggleForm={() => this.toggleForm()} />
                </section>
            )
        }

        if (newGoal) {
            return <GoalForm toggleForm={this.toggleForm()} actions={actions} goals={goals} addGoal={() => this.addGoal()} />
        }

        let actionList = actions.map(action => {
            const goalList = goals.filter(goal => goal.action_id === action.id).map(
                goal => <div 
                        key={goal.id}
                        className='goal-container'>
                        <Goal 
                            goal={goal} 
                            activateForm={(id) => this.activateForm(id)} 
                            toggleForm={() => this.toggleForm()} />
                    </div> 
            )
            return (
                <div 
                    key={action.id}
                    className='action'>
                    <div className='action-header'>
                        <h2>{action.title}</h2>
                    </div>
                    {goalList}
                </div>
                )
            })

        const newbie = actions.length === 0 &&
        <div className='actions-newbie'>
            <p>
                Hey there, user!
                <br/>
                Feel free to add a goal below.
            </p>
            <p>
                You can keep track of it in your journal. 
            </p>
            <div className='settings-arrow'>
                &#8595;
            </div>
        </div>
        return (
            <section className='reminders-page'>
                <div className='actions'>
                    {actionList}
                </div>
                {newbie}
                <button
                    className='add-reminder'
                    onClick={() => this.addGoal()}
                    >
                    <FontAwesomeIcon icon={faTools} />
                </button>
            </section>
        )
    }
}

export default ActionsPage;