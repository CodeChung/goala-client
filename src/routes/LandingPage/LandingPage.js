import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <section className='landing-page'>
                <div className='landing-desc'>
                    <p>A private journal integrated with goal and reminder tracking.</p>
                    <p>Keep track of your life while writing out your narrative.</p>
                </div>
                <Link to='/demo' className='demo-button'>
                    Demo Journal
                </Link>
            </section>
        )
    }
}

export default LandingPage;