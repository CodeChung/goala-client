import React from 'react';
import './LandingPage.css';

class LandingPage extends React.Component {
    render() {
        return (
            <section className='landing-page'>
                <div className='landing-desc'>
                    <p>A private journal integrated with goal and reminder tracking.</p>
                    <p>Keep track of your life while writing out your narrative.</p>
                    <button>Check it out</button>
                </div>
            </section>
        )
    }
}

export default LandingPage;