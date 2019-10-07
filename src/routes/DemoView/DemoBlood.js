import React from 'react';
import { Link } from 'react-router-dom';
import Date from '../../components/ToolBox/Blocks/Date/Date';
import Text from '../../components/ToolBox/Blocks/Text/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import Clock from '../../components/ToolBox/Blocks/Clock/Clock';

class DemoBlood extends React.Component {
    render() {
        return (
            <section className='demo-entry-log demo-blood'>
                <Link to='/demo'>
                    <FontAwesomeIcon 
                        className='entry-back-arrow' 
                        icon={faArrowCircleLeft} />
                </Link>
                <div className='demo-entry-log-body'>
                    <Date />
                    <Clock value={{ time: 1430 }} />
                    <Text value={({ text: 'Go to LA Hospital' })}/>
                </div>
            </section>
        )
    }
}

export default DemoBlood