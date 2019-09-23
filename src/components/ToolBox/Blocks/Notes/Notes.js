import React from 'react';
import './Notes.css';

class Notes extends React.Component {
    render() {
        return (
            <div className='block-notes'>
                <div
                    className='block-notepad'
                    contentEditable='true'>
                    Keep notes here
                </div>
            </div>
        )
    }
}

export default Notes