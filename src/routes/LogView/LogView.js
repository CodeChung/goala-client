import React from 'react';
import './LogView.css';
import BaseBlock from '../../components/ToolBox/Blocks/BaseBlock/BaseBlock';
import MissingPage from '../MissingPage/MissingPage';
import Spinner from '../../components/Spinner/Spinner';
import LogsService from '../../services/logs-service';
import GoalsService from '../../services/goals-service';
import RemindersService from '../../services/reminders-service';
import BlocksService from '../../services/blocks-service';

class LogView extends React.Component {
    state = {
        blocks: null,
        error: null,
        loading: true,
        log: null,
        reminder: null,
        goal: null,
        block_sequence: null,
    }
    componentDidMount() {
        let { logdate } = this.props.match.params;
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
                debugger
                if (log[0]) {
                    if (log[0].goal_id) {
                        GoalsService.getGoalByGoalId(log[0].goal_id)
                            .then(goal => {
                                BlocksService.getBlocksByIds(goal.block_sequence)
                                    .then(blocks => this.setState({ goal, blocks }))
                            })
                    } else if (log[0].reminder_id) {
                        RemindersService.getReminderByReminderId(log[0].reminder_id)
                            .then(reminder => {
                                BlocksService.getBlocksByIds(reminder.block_sequence)
                                    .then(blocks => this.setState({ reminder, blocks }))
                            })
                    } else {
                        this.setState({ error: 'whoops, not found'})
                    }
                }
            })
            .catch(res => this.setState({ error: res.error }))

        this.setState({ loading: false })
    }
    render() {
        const { loading, error } = this.state
        
        if ( loading ) {
            return <Spinner />
        }
        if ( error ) {
            return <MissingPage message={error} />
        }
        return (
            <div className='log-view'>
                LOGS
            </div>
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