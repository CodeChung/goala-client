import React from 'react';
import { Redirect } from 'react-router-dom';
import SettingsForm from '../SettingsForm/SettingsForm';
import { GoalContext } from '../../context/GoalContext';
import ApiGoalsService from '../../services/goals-service';

class Settings extends React.Component {
    state = {
        modalClass: 'modal',
        deleted: false,
    }
    displayDeleteForm() {
        const modalClass = 
            this.state.modalClass === 'modal modal-active' 
            ? 'modal' 
            : 'modal modal-active'

        this.setState({modalClass})
    }
    deleteGoal() {
        const goalId = this.context.goal.id
        
        ApiGoalsService.deleteGoal(goalId)
            .then(
                this.setState({ deleted: true })
            )
            .catch(res => this.setState({error: res.error}))
    }
    render() {
        if (this.state.deleted) {
            return <Redirect to='/' />
        }
        return (
            <div>
                <h2>Settings</h2>
                <SettingsForm />
                <button onClick={() => this.displayDeleteForm()}>
                    Delete Goal
                </button>
                <div className={this.state.modalClass}>
                    <div className='modal-content'>
                        <span className="close" onClick={() => this.displayDeleteForm()}>&times;</span>
                        <h3>Are you sure you want to delete this goal?</h3>
                        <button onClick={() => this.deleteGoal()}>
                            Yes
                        </button>
                        <button onClick={() => this.displayDeleteForm()}>
                            No
                        </button>
                    </div>
                </div>
            </div>
        )
    }
}

Settings.contextType = GoalContext

export default Settings