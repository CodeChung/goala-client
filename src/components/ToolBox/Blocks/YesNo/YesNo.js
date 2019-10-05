import React from 'react';
import './YesNo.css';
import LogsService from '../../../../services/logs-service';

class YesNo extends React.Component {
    state = {
        yes: null,
    }
    componentDidMount() {
        const yes = this.props.value ? this.props.value.yes : false
        this.setState({ yes })
    }
    componentWillUnmount() {
        if (this.props.log && JSON.stringify(this.props.value) !== JSON.stringify(this.state)) {
            LogsService.updateLogValue(this.props.log.blockId, this.props.log.date, this.props.log.log_id, this.state)
        }
    }
    toggleButton() {
        const { yes } = this.state
        this.setState({ yes: !yes })
    }
    render() {
        const { yes } = this.state
        return (
            <div className='yes-no'>
                <div 
                    onClick={() => this.toggleButton()}
                    className={'block-bool ' + (yes && 'bool-active')}>
                    Yes
                </div>
                <div 
                    onClick={() => this.toggleButton()}
                    className={'block-bool ' + (!yes && 'bool-active')}>
                    No
                </div>
            </div>
        )
    }
}

export default YesNo;