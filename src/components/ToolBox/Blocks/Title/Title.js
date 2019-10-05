import React from 'react';
import propTypes from 'prop-types';
import './Title.css';

class Title extends React.Component {
    state = {
        title: 'Subtitle'
    }
    componentDidMount() {
        const { value } = this.props
        if (value && value.title) {
            this.setState({ title: value.title})
        }
    }
    updateTitle(event) {
        event.preventDefault()
        this.setState({ title: event.target.value })
    }
    render() {
        const { title } = this.state 
        return (
            <div className='block block-title'>
                <input
                    onChange={(e) => this.updateTitle(e)}
                    value={title}
                    />
            </div>
        )
    }
}

Title.defaultProps = {
    value: propTypes.object
}

export default Title;