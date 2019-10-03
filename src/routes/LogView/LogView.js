import React from 'react';
import './LogView.css';
import BaseBlock from '../../components/ToolBox/Blocks/BaseBlock/BaseBlock';
import MissingPage from '../MissingPage/MissingPage';
import Spinner from '../../components/Spinner/Spinner';
import LogsService from '../../services/logs-service';
import GoalsService from '../../services/goals-service';
import RemindersService from '../../services/reminders-service';

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
                if (!this.state.log.value) {
                    if (this.state.log.goal_id) {
                        GoalsService.getGoalByGoalId(this.state.log.goal_id)
                            .then(goal => this.setState({ goal: goal[0] }))
                    } else if (this.state.log.reminder_id) {
                        RemindersService.getReminderByReminderId(this.state.log.reminder_id)
                            .then(reminder => this.setState({ reminder: reminder[0]}))
                    } else {
                        this.setState({ error: 'whoops, not found'})
                    }
                }
                debugger
                // now check if reminder or goal and get block sequence
                const { reminder, goal } = this.state
                let block_sequence = this.state.goal ? this.state.goal.block_sequence : this.state.reminder.block_sequence
                this.setState({ block_sequence })
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