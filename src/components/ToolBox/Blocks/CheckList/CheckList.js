import React from 'react';
import propTypes from 'prop-types';
import './CheckList.css';

class CheckList extends React.Component {
    // probably should sanitize this later
    state = {
        text: '',
        checked: false,
    }
    componentDidMount() {
        const { text } = this.props
        this.setState({ text })
    }
    updateText(e) {
        e.preventDefault()
        this.setState({ text: e.target.value})
    }
    toggleCheck() {
        const { checked } = this.state
        this.setState({ checked: !checked })
    }
    render() {
        const { text, checked } = this.state
        return (
            <div className='block-checklist'>
                <input 
                    placeholder='checklist'
                    onChange={(e) => this.updateText(e)}
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