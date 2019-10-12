import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import './GoalForm.css';
import ActionsService from '../../services/actions-service';
import GoalsService from '../../services/goals-service';

class GoalForm extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            actionTitle: '',
            deleteActionTitle: '',
            goalTitle: '',
            deleteGoalTitle: '',
            actionId: null,
            error: null,
            success: false,
        }
    }
    componentDidMount() {
        let actionTitle = this.props.actions[0] ? this.props.actions[0].title : ''
        this.setState({ actionTitle })
    }
    createAction(event) {
        const { actionTitle } = this.state
        event.preventDefault()
        ActionsService.createAction(actionTitle)
            .then(res => {
                this.setState({ reload: true })
            })
            .catch(res => this.setState({ error: res.error }))
        this.props.toggleForm()
    }
    createGoal(event) {
        event.preventDefault()
        const { goalTitle, actionId } = this.state
        if (!actionId) {
            return this.setState({ error: 'Must specify goal category first'})
        }
        GoalsService.createGoal(goalTitle, actionId)
            .then(res => {
                this.setState({ reload: true })
            })
            .catch(res => this.setState({ error: res.error }))
        this.props.toggleForm()
    }
    updateActionTitle = event => {
        this.setState({ actionTitle: event.target.value })
    }
    updateDeleteAction = event => {
        this.setState({ deleteActionTitle: event.target.value })
    }
    updateGoalTitle = event => {
        this.setState({ goalTitle: event.target.value })
    }
    updateDeleteGoal = event => {
        this.setState({ deleteGoalTitle: event.target.value })
    }
    deleteAction = event => {
        const { deleteActionTitle } = this.state
        ActionsService.deleteAction(deleteActionTitle)
            .then(res => this.setState({ actions: res.actions }))
            .catch(res => this.setState({ error: res.error }))
        this.props.toggleForm()
    }
    deleteGoal = event => {
        const { deleteGoalTitle } = this.state
        GoalsService.deleteGoal(deleteGoalTitle)
            .then(res => this.setState({ goals: res.goals }))
            .catch(res => this.setState({ error: res.error }))
        this.props.toggleForm()
    }
    render() {
        const { error } = this.state
        const { actions, goals } = this.props
        const options = [ {title: '--Choose a goal category', value: null }, ...actions].map((action, index) => <option 
                key={index} 
                value={action.id}>
                {action.title}
                </option>)
        const goalOptions = goals.map(goal => <option
            key={goal.id} 
            value={goal.id}>
            {goal.title}
            </option>)
        return (
            <div className='goal-form'>
                <FontAwesomeIcon 
                    className='entry-back-arrow' 
                    onClick={() => this.props.toggleForm()} 
                    icon={faArrowAltCircleLeft} />
                <div className='goal-settings'>
                    <div className='new-goal'>
                        {error}
                        <form
                            onSubmit={(e) => this.createAction(e)}
                            >
                            <legend><h2>Add New Goal Category</h2></legend>
                            <label>Title</label>
                            <input 
                                onChange={this.updateActionTitle}
                                />
                            <button>Add Category</button>
                        </form>
                        <form
                            onSubmit={(e) => this.createGoal(e)}
                            >
                            <legend><h2>Add New Goal</h2></legend>
                            <label>Category Type:</label>
                            <select
                                onChange={(event) => this.setState({ actionId: event.target.value })}
                                >
                                {options}
                            </select>
                            <br/>
                            <label>Title</label>
                            <input onChange={this.updateGoalTitle} />
                            <button>Add Goal</button>
                        </form>
                    </div>
                    <div className='delete-goal'>
                        <form
                            onSubmit={(e) => this.deleteAction(e)}
                            >
                            <legend><h2>Delete Goal Category</h2></legend>
                            <select
                                onChange={this.updateDeleteAction}
                                >
                                {options}
                            </select>
                            <button>Delete</button>
                        </form>
                        <form
                            onSubmit={(e) => this.deleteGoal(e)}
                            >
                            <legend><h2>Delete Goal</h2></legend>
                                <select
                                    onChange={this.updateDeleteGoal}
                                    >
                                    {goalOptions}
                                </select>
                            <button>Delete</button>
                        </form>
                    </div>
                </div>
                
            </div>
        )
    }
    
}

export default GoalForm;