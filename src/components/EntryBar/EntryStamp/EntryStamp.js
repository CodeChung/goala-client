import React from 'react';
import './EntryStamp.css';

class EntryStamp extends React.Component {
    state = {
        tile: {}
    }
    componentDidMount() {
        const { goal, reminder } = this.props

        if (goal) {
            this.setState({ tile: goal})
        }

        if (reminder) {
            this.setState({ tile: reminder })
        }
    }
    render() {
        const { title } = this.props
    
        return (
            <div
                onClick={() => this.props.addTile(this.state.tile)} 
                className='entry-stamp'>
                {title}
            </div>
        )
    }
}

export default EntryStamp;