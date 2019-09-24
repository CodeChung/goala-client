import React from 'react';
import './Count.css';

class Count extends React.Component {
    state = {
        num: '',
        den: '',
        units: 'units'
    }
    componentDidMount() {
        const { num, den, units } = this.props.value
        this.setState({ num, den, units})
    }
    onChange(type, event) {
        event.preventDefault()
        this.setState({ [type]: event.target.value })
    }
    render() {
        const { num, den, units } = this.state
        return (
            <div className='block block-count'>
                <h2>Count</h2>
                <input
                    type='number'
                    placeholder='#'
                    onChange={(e) => this.onChange('num', e)}
                    value={num}
                    />
                /
                <input
                    type='number'
                    placeholder='count'
                    onChange={(e) => this.onChange('den', e)}
                    value={den}
                    />
                <input
                    placeholder='units'
                    onChange={(e) => this.onChange('units', e)}
                    value={units}
                    />
            </div>
        )
    }
}

export default Count;