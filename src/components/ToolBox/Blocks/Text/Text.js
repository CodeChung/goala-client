import React from 'react';
import propTypes from 'prop-types';
import './Text.css';

class Text extends React.Component {
    state = {
        text: 'Text'
    }
    render() {
        return (
            <div
                contentEditable='true' 
                className='block block-text'
            >
                {this.props.value.text || this.state.text}
            </div>
        )
    }
}

Text.defaultProps = {
    value: propTypes.object
}

export default Text;