import React from 'react';
import './EntryStamp.css';

class EntryStamp extends React.Component {
    state = {
        tile: {type: null}
    }
    componentDidMount() {
        const { goal, reminder } = this.props

        if (goal) {
            this.setState({ 
                tile: { ...goal, type: 'goal' },
            })
        }

        if (reminder) {
            this.setState({ 
                tile: { ...reminder, type: 'reminder' },
            })
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