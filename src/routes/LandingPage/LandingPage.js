import React from 'react';
import './LandingPage.css';
import { Link } from 'react-router-dom';

class LandingPage extends React.Component {
    render() {
        return (
            <section className='landing-page'>
                <div className='landing-desc'>
                    <p>Goala is a personal journal with goal and reminder tracking.</p>
                    <p>Keep track of your life while writing your narrative.</p>
                </div>
                <Link to='/demo' className='demo-button'>
                    Demo Journal
                </Link>
            </section>
        )
    }
}

export default LandingPage;