import React from 'react';
import './MissingPage.css';

class MissingPage extends React.Component {
    render() {
        const { message } = this.props
        return (
            <div className='missing-page'>
                <img 
                    alt='missing koala'
                    src='https://images.unsplash.com/photo-1556811431-ec33c663aa89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2550&q=80' />
                <h2>Sorry bud, I'm missing</h2>
                { message }
            </div>
        )
    }
}

export default MissingPage;