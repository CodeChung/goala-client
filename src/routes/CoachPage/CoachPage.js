import React from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import Reports from '../../components/Reports/Reports';
import Stats from '../../components/Stats/Stats';
import Settings from '../../components/Settings/Settings';
import Chat from '../../components/Chat/Chat';
import Spinner from '../../components/Spinner/Spinner';
import './CoachPage.css'
import { GoalContext } from '../../context/GoalContext';
import ApiGoalsService from '../../services/goals-service';
import ChatService from '../../services/chat-service';

class CoachPage extends React.Component {
    async componentDidMount() {
        const { goalId }= this.props.match.params
        // Here we get data for our specific goal
        ApiGoalsService.getGoalById(goalId)
            .then(res => {
                this.context.setGoal(res[0])
            })
            .catch(res => this.context.setError({ error: res.error }))
        
        // here we get conversation for specific goal
        try {
            let chat = await ChatService.getChat(goalId)
            chat.shift()
            console.log(chat)
            if (!chat.length) {
                await ChatService.postMessage(goalId)
                chat = await ChatService.getChat(goalId)
            }
            if (chat.error) {
                this.context.setError({ error: chat.error })
            } else {
                this.context.setChat(goalId, chat)
            }
        } catch(err) {
            this.context.setError({ error: 'Something went wrong, try again' })
        }
        

    }

    render() {
        const path = this.props.match.path.replace(':goalId', this.props.match.params.goalId)
        const goalId = this.props.match.params.goalId
        return (
            <section className='coach-page'>
                <nav className='coach-nav'>
                    <Link to='/'
                        onClick={this.props.showNav}>{'<-'}</Link>
                    <Link to={`${path}/`}>Chat</Link>
                    <Link to={`${path}/reports`}>Reports</Link>
                    <Link to={`${path}/stats`}>Stats</Link>
                    <Link to={`${path}/settings`}>Settings</Link>
                </nav>
                <div className='coach-view'>
                    <Switch>
                        <Route path={`${path}/reports`} render={() => <Reports goalId={goalId} />} />
                        <Route path={`${path}/stats`}  render={() => <Stats goalId={goalId} />} />
                        <Route path={`${path}/settings`} render={() => <Settings goalId={goalId} />} />
                        <Route render={() => {
                            return this.context.chats[`chat_${goalId}`]
                            ?
                            <Chat goalId={goalId} />
                            :
                            <Spinner />
                        }}/>
                    </Switch>
                </div>
            </section>
        )
    }
}

CoachPage.contextType = GoalContext

export default CoachPage

