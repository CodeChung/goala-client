import React from 'react';
import './YesNo.css';

class YesNo extends React.Component {
    state = {
        value: true
    }
    componentDidMount() {
        const { value } = this.props
        if (value) {
            this.setState({ value: value.on})
        }
    }
    toggleValue() {
        const { value } = this.state
        console.log(this.state.value)
        this.setState({ value: !value })
    }
    render() {
        const { value } = this.props
        return (
            <div className='yes-no'>
                <button
                    onClick={() => this.toggleValue()}
                    className={ 'active-bool ' + (value && 'active-yes') }
                >
                    Yes
                </button>
                <button
                    onClick={() => this.toggleValue()}
                    className={ 'active-bool ' + (!value && 'active-no') }
                    // className={ 'active-bool ' (!value && 'active-no') }
                >
                    No
                </button>
            </div>
        )
    }
}

export default YesNo;