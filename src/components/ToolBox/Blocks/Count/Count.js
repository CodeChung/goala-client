import React from 'react';
import './Count.css';
import LogsService from '../../../../services/logs-service';

class Count extends React.Component {
    state = {
        num: 0,
        den: 5,
        units: 'units'
    }
    componentDidMount() {
        if (this.props.value) {
            let { num, den, units } = this.props.value
            num = num ? num : 0
            den = den ? den : 5
            units = units ? units : 'units'
            this.setState({ num, den, units })
        }

    }
    onChange(type, event) {
        event.preventDefault()
        this.setState({ [type]: event.target.value })
    }
    componentWillUnmount() {
        if (this.props.log && JSON.stringify(this.props.value) !== JSON.stringify(this.state)) {
            LogsService.updateLogValue(this.props.log.blockId, this.props.log.date, this.props.log.log_id, this.state)
        }
    }
    render() {
        const { num, den, units } = this.state
        return (
            <div className='block block-count'>
                <h2>Count</h2>
                <div className='block-count-input'>
                    <input
                        className='number'
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
                        className='units'
                        placeholder='units'
                        onChange={(e) => this.onChange('units', e)}
                        value={units}
                        />
                </div>
            </div>
        )
    }
}

export default Count;