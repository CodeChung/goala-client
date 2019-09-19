import React from 'react';
import LineChart from '../LineChart/LineChart';
import { GoalContext } from '../../context/GoalContext';
import './Stats.css';
import LogsService from '../../services/logs-service';
import Spinner from '../Spinner/Spinner';


class Stat extends React.Component {
    state = {
        type: 'daily',
        error: '',
        data: [],
        loaded: false,
        stats: {}

    }
    componentDidMount() {
        const { type } = this.state
        const { goalId } = this.props
        this.changeGraphType(type)
        LogsService.getGoalStats(goalId)
            .then(res => {
                this.setState({ stats: res })
            })

        this.setState({ loaded: true })
    }
    changeGraphType(type) {
        const { goalId } = this.props
        if (type === 'weekly') {
            LogsService.getWeeklyRatings(goalId)
                .then(res => {
                    this.setState({ data: res.data })
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
        } else if (type === 'daily') {
            LogsService.getDailyRatings(goalId)
                .then(res => {
                    this.setState({ data: res.data })
                })
                .catch(res => {
                    this.setState({ error: res.error })
                })
        }
    }
    render() {
        const { data } = this.state
        if (!this.state.loaded) {
            return <Spinner />
        } else {
            return (
                <div className='stats-page'>
                    <h2>Stats</h2>
                    <select onChange={(e) => this.changeGraphType(e.target.value)}>
                        <option value='daily'>Daily</option>
                        <option value='weekly'>Weekly</option>
                    </select>
                    {this.state.error || <LineChart ratings={data}/>}
                    <p>Total Days Spent: {this.state.stats.count}</p>
                </div>
            )
        }
    }
}

Stat.contextType = GoalContext

export default Stat