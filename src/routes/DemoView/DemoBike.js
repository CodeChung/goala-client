import React from 'react';
import { Link } from 'react-router-dom';
import CheckList from '../../components/ToolBox/Blocks/CheckList/CheckList';
import Date from '../../components/ToolBox/Blocks/Date/Date';
import Text from '../../components/ToolBox/Blocks/Text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Clock from '../../components/ToolBox/Blocks/Clock/Clock';

class DemoBike extends React.Component {
    render() {
        return (
            <section className='demo-entry-log demo-bike'>
                <Link to='/demo'>
                    <FontAwesomeIcon 
                        className='entry-back-arrow' 
                        icon={faArrowCircleLeft} />
                </Link>
                <div className='demo-entry-log-body'>
                    <Date />
                    <Text value={({ text: 'Go to Cedar Rock Trail' })}/>
                    <Clock value={({ time: 832 })} />
                    <CheckList value={({ checked: true, text: 'ride 3 miles' })} />
                </div>
            </section>
        )
    }
}

export default DemoBike