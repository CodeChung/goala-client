import React from 'react';
import './ActionsPage.css';
import ToolBox from '../../components/ToolBox/ToolBox';
import Action from '../../components/Action/Action';
import ActionsList from '../../components/ActionsList/ActionsList';

const exampleActions = [
    {
        id: 1,
        title: 'go to the gym',
        sequence: []
    },
    {
        id: 2,
        title: 'eat healthy',
        sequence: []
    },
    {
        id: 3,
        title: 'saxaphone class',
        sequence: []
    }
]

class ActionsPage extends React.Component {
    state = {
        toolbox: [],
        actions: exampleActions,
        action: {},
        showAction: false
    }
    toggleAction() {
        const { showAction } = this.state
        this.setState({ showAction: !showAction })
    }
    render() {
        const { action, actions, showAction } = this.state
        return (
            <section className='actions-page'>
                <div className='actions-main'>
                    { !showAction && <ActionsList actions={actions} toggleAction={() => this.toggleAction()} />}
                    { showAction && <Action action={action} /> }
                </div>
                <ToolBox view='action' />
            </section>
        )
    }
}

export default ActionsPage