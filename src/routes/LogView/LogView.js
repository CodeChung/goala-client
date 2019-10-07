import React from 'react';
import { Redirect } from 'react-router-dom';
import './LogView.css';
import MissingPage from '../MissingPage/MissingPage';
import Spinner from '../../components/Spinner/Spinner';
import LogsService from '../../services/logs-service';
import GoalsService from '../../services/goals-service';
import RemindersService from '../../services/reminders-service';
import BlocksService from '../../services/blocks-service';
import BlockMap from '../../components/ToolBox/Blocks/BaseBlock/BlockMap';

class LogView extends React.Component {
    state = {
        blocks: null,
        error: null,
        loading: true,
        log: null,
        originalBlocks: null,
        reminder: null,
        goal: null,
        block_sequence: null,
        redirect: false, 
        values: {},
    }
    componentDidMount() {
        let logdate = this.props.match ? this.props.match.params.logdate : null;
        
        if (logdate) {
            const logId = logdate.split('=')[0]
        const date = logdate.split('=')[1]

        if (!logId) {
            this.setState({ error: 'log id is missing'})
        }
        if (!date) {
            this.setState({ error: 'date is missing'})
        }

        LogsService.getLogByIdDate(logId, date)
            .then(log => {
                // if no log, create. else set log.
                if (!log.length) {
                    LogsService.createLog(logId, date)
                        .then(log => {
                            this.setState({ log:log[0] })
                        })
                }
                this.setState({ log: log[0] })

                // find if reminder or goal and get value
                const { goal_id, reminder_id } = log[0]
                if (goal_id) {
                    GoalsService.getGoalByGoalId(goal_id)
                        .then(goal => {
                            this.setState({ goal: goal[0], sequence: goal[0].block_sequence })
                            BlocksService.getBlocksByIds(goal[0].block_sequence)
                                .then(blocks => this.setState({ blocks, originalBlocks: blocks }))
                        })
                }
                if (reminder_id) {
                    RemindersService.getReminderByReminderId(reminder_id)
                        .then(reminder => {
                            this.setState({ reminder: reminder[0], sequence: reminder[0].block_sequence })
                            BlocksService.getBlocksByIds(reminder[0].block_sequence)
                                .then(blocks => this.setState({ blocks, originalBlocks: blocks }))
                        })
                }

                const { value } = log[0]
                this.setState({ values: value })
            })
            .catch(res => this.setState({ error: res.error }))
        }
        this.setState({ loading: false })
    }
    componentWillUnmount() {
        
    }
    resetDate(){
        const { log } = this.state
        log.date = null
        this.setState({ log })
    }
    render() {
        const { blocks, values, loading, log, error, redirect } = this.state
        let logs = blocks && blocks.map(block => {
            let { type, value } = block

            if (value && values && values[block.id]) {
                value = values[block.id]
            }
            return <div key={block.id} className='log-block'>{BlockMap(type, value, {...log, blockId: block.id})}</div>
        })

        if ( loading ) {
            return <Spinner />
        }
        if ( error ) {
            return <MissingPage message={error} />
        }
        if (redirect) {
            return <Redirect to='/' />
            // return <EntryPage resetDate={() => this.resetDate()} date={log.date} />
        }
        return (
            <section className='log-view'>
                <button onClick={() => this.setState({ redirect: true })}>Take Me Back</button>
                <div className='logs-list'>
                    {logs}
                </div>
            </section>
        )
        // const { blocks } = this.state
        // const { logs } = this.props
        // return (
        //     <div className='log-view'>
        //         {logs.title}
        //         {blocks}
        //     </div>
        // )
    }
}

export default LogView