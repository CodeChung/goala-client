import React from 'react';
import './ActionsList.css';

class ActionsList extends React.Component {
    render() {
        const actionsList = this.props.actions.map((action, index) => {
            return (
                <div  
                    key={index}
                    className='action-icon'>
                    {action.title}
                </div>
            )
        })
        return (
            <div className='action-list'>
                {actionsList}
                <button>Add Action</button>
            </div>
        )
    }
}

export default ActionsList