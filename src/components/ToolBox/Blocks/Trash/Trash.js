import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import './Trash.css';

class Trash extends React.Component {
    render() {
        return (
            <div className='block block-trash'>
                <FontAwesomeIcon icon={faTrashAlt} />
            </div>
        )
    }
}

Trash.defaultProps = {
    value: propTypes.object
}

export default Trash;