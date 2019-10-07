import React from 'react';
import './Notes.css';
import ContentEditable from 'react-contenteditable';

class Notes extends React.Component {
    state = {
        content: 'Sticky Note'
    }
    componentDidMount() {
        const { value } = this.props;
        if (value) {
            let content = value.content ? value.content : value.text || 'Sticky Note'
            this.setState({ content })
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
                <ContentEditable
                    innerRef={this.ContentEditable}
                    html={content}
                    disabled={false}
                    onChange={this.updateContent}
                    />
            </div>
        )
    }
}

export default Notes