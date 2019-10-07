import React from 'react'
import { Switch, Link, Route } from 'react-router-dom'
import LandingPage from '../../routes/LandingPage/LandingPage'
import LoginPage from '../../routes/LoginPage/LoginPage'
import RegistrationPage from '../../routes/RegistrationPage/RegistrationPage';
import MissingPage from '../../routes/MissingPage/MissingPage';
import './NonUser.css';
import DemoView from '../../routes/DemoView/DemoView';
import DemoBike from '../../routes/DemoView/DemoBike';
import DemoBlood from '../../routes/DemoView/DemoBlood';
import DemoReading from '../../routes/DemoView/DemoReading';
import DemoGroceries from '../../routes/DemoView/DemoGroceries';

class NonUser extends React.Component {
    render() {
        return (
            <section className='new-user view'>
                <nav>
                    <Link to='/'>
                        <span className='logo'>
                            Goala
                        </span>
                    </Link>
                    <div className='new-user-links'>
                        <Link to='/register'>Register</Link>
                        <Link to='/login'>Login</Link>
                    </div>
                    
                </nav>
                <main>
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route exact path='/login' render={() => <LoginPage login={() => this.props.login()}/>} />
                        <Route exact path='/register' component={RegistrationPage} />
                        <Route exact path='/demo' component={DemoView} />
                        <Route path='/demo/bike' component={DemoBike} />
                        <Route path='/demo/groceries' component={DemoGroceries} />
                        <Route path='/demo/reading' component={DemoReading} />
                        <Route path='/demo/blood' component={DemoBlood} />
                        <Route component={MissingPage}/>
                    </Switch>
                </main>
            </section>
        )
    }
}

export default NonUser;