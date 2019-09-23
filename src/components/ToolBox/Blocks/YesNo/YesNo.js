import React from 'react';
import './YesNo.css';

class YesNo extends React.Component {
    state = {
        value: true
    }
    componentDidMount() {
        const { value } = this.props
        this.setState({ value })
    }
    toggleValue() {
        console.log('hi')
        const { value } = this.state
        console.log(value, !value)
        this.setState({ value: !value }, function () {
            console.log(this.state.value)
        })
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