import React from 'react';
import './CalendarCell.css';
import PropTypes from 'prop-types';
import ContentEditable from 'react-contenteditable';

class CalendarCell extends React.Component {
    state = {

    }
    componentDidMount() {

    }
    render() {
        return (
            <div 
                onClick={() => {
                    const { data } = this.props
                    this.props.openData(data)
                }}
                className={'calendar-cell ' + this.props.type}
                to='/'>
                <div className='cell-date'>
                    {this.props.number || ''}
                </div>
                <div className='cell-text'>
                    {this.props.data && <ContentEditable
                    innerRef={this.ContentEditable}
                    html={this.props.data.text}
                    disabled={true}
                    />}
                </div>
            </div>
        )
    }
}

CalendarCell.propTypes = {
    moment: PropTypes.object
}

export default CalendarCell