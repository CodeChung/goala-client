import React from 'react';
import ContentEditable from 'react-contenteditable';
import propTypes from 'prop-types';
import './Text.css';

class Text extends React.Component {
    state = {
        text: 'Text'
    }
    handleChange = event => {
        this.setState({ text: event.target.value })
    }
    render() {
        const text = this.props.value.text ? this.props.value.text : this.state.text
        return (
            <div className='block block-text'>
                <ContentEditable
                    innerRef={this.ContentEditable}
                    html={text}
                    disabled={false}
                    onChange={this.handleChange}
                    />
            </div>
        )
    }
}

Text.defaultProps = {
    value: propTypes.object
}

export default Text;