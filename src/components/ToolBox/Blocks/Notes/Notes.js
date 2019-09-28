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
        const propContent = this.props.value ? this.props.value.text : null
        return (
            <div className='block block-notes'>
                <div
                    onChange={(e) => this.updateContent(e)}
                    className='block block-notepad'
                    contentEditable='true'>
                    { propContent || content}
                </div>
            </div>
        )
    }
}

export default Notes