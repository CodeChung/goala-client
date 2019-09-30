import React from 'react';
import './EntryStamp.css';

class EntryStamp extends React.Component {
    render() {
        const { title } = this.props
        return (
            <div className='entry-stamp'>
                {title}
            </div>
        )
    }
}

export default EntryStamp;