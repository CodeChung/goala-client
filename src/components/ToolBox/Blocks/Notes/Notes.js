import React from 'react';
import './Notes.css';

class Notes extends React.Component {
    state = {
        content: 'Sticky Note'
    }
    componentDidMount() {
        const { value } = this.props;
        if (value) {
            this.setState({ content: value.content })
        }
    }
    updateContent(event) {
        event.preventDefault()
        this.setState({ content: event.target.value })
    }
    render() {
        const { content } = this.state
        return (
            <div className='block block-notes'>
                <div
                    onChange={(e) => this.updateContent(e)}
                    className='block block-notepad'
                    value={ (content.length && content) || 'Sticky Note'}
                    contentEditable='true'>
                </div>
            </div>
        )
    }
}

export default Notes