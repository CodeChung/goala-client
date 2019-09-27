import React from 'react';
import propTypes from 'prop-types';
import './CheckList.css';

class CheckList extends React.Component {
    //TODO probably should sanitize this later
    state = {
        text: 'checklist',
        checked: false,
    }
    componentDidMount() {
        const { text } = this.props
        if (text) {
            this.setState({ text })
        }
    }
    updateText = event => {
        this.setState({ text: event.target.value})
    }
    toggleCheck() {
        const { checked } = this.state
        this.setState({ checked: !checked })
    }
    render() {
        const { text, checked } = this.state
        return (
            <div className='block block-checklist'>
                <input
                    onChange={this.updateText}
                    value={text}
                    />
                <input
                    onChange={() => this.toggleCheck()}
                    checked={checked}
                    type='checkbox'
                    />
            </div>
        )
    }
}

CheckList.defaultProps = {
    value: propTypes.object
}

export default CheckList;