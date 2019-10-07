import React from 'react';
import { Redirect, Switch, Route } from 'react-router-dom';
import MissingPage from '../../routes/MissingPage/MissingPage';
import './User.css'
import HomePage from '../../routes/HomePage/HomePage';
import SideBar from '../../components/SideBar/SideBar';
import CalendarPage from '../../routes/CalendarPage/CalendarPage';
import RemindersPage from '../../routes/RemindersPage/RemindersPage';
import ActionsPage from '../../routes/ActionsPage/ActionsPage';
import BlocksPage from '../../routes/BlocksPage/BlocksPage';
import LogView from '../../routes/LogView/LogView';

class User extends React.Component {
    state = {
        view: 'Home'
    }
    updateView = (view) => {
        this.setState({ view })
    }
    render() {
        return (
            <section className='user view'>
                <SideBar logout={() => this.props.logout()}/>
                <main>
                    <Switch>
                        <Route exact path='/' 
                            component={HomePage} />
                        <Route path='/login' render={() => <Redirect to='/'/>} />
                        <Route path='/calendar'
                            component={CalendarPage} />
                        <Route path='/actions'
                            component={ActionsPage} />
                        <Route path='/reminders'
                            component={RemindersPage} />
                        <Route path='/blocks'
                            component={BlocksPage} />
                        <Route path='/logs/:logdate'
                            component={LogView} />
                        <Route component={MissingPage} />
                    </Switch>
                </main>
            </section>
            
        )
    }
}

export default User;