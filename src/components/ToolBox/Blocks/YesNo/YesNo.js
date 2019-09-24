import React from 'react';
import './YesNo.css';

class YesNo extends React.Component {
    state = {
        yes: false
    }
    componentDidMount() {
        const { value } = this.props
        if (value) {
            this.setState({ yes: value.yes })
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