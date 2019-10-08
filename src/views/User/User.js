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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';

class User extends React.Component {
    state = {
        view: 'Home',
        toggleSidebar: true
    }
    updateView = (view) => {
        this.setState({ view, toggleSidebar: true })
    }
    toggleSidebar = event => {
        const { toggleSidebar } = this.state
        this.setState({ toggleSidebar: !toggleSidebar })
    }
    render() {
        const { toggleSidebar } = this.state
        return (
            <section className='user view'>
                <SideBar hidden={toggleSidebar} logout={() => this.props.logout()}/>
                <div className='mobile-header'>
                    <div className='sidebar-max'
                            onClick={this.toggleSidebar}>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                    <span className='logo'>
                        Goala
                    </span>
                </div>
                <main>
                    {!toggleSidebar && <div className='sidebar-min'
                            onClick={this.toggleSidebar}>
                            <FontAwesomeIcon icon={faChevronLeft} />
                        </div>}
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