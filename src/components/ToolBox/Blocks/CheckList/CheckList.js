import React from 'react';
import propTypes from 'prop-types';
import './CheckList.css';
import LogsService from '../../../../services/logs-service';

class CheckList extends React.Component {
    //TODO probably should sanitize this later
    state = {
        text: 'checklist',
        checked: false,
    }
    componentDidMount() {
        const { log, value } = this.props
        if (log && log.value) {
            Object.keys(log.value).forEach(key => {
                Object.keys(log.value[key]).forEach(k2y => {
                    this.setState({ [`${k2y}`]: log.value[key][k2y] })
                })
            })
        }
        else if (value) {
            let checked = value.checked
            let text = value.text ? value.text : value.value
            this.setState({ checked, text })
        }
    }
    componentWillUnmount() {
        if (this.props.log && JSON.stringify(this.props.value) !== JSON.stringify(this.state)) {
            LogsService.updateLogValue(this.props.log.blockId, this.props.log.date, this.props.log.log_id, this.state)
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