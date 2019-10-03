import React from 'react';
import './LogView.css';
import BaseBlock from '../../components/ToolBox/Blocks/BaseBlock/BaseBlock';
import MissingPage from '../MissingPage/MissingPage';
import Spinner from '../../components/Spinner/Spinner';

class LogView extends React.Component {
    state = {
        blocks: [],
        error: null,
        loading: true,
    }
    componentDidMount() {
        debugger
        let { logdate } = this.props.match.params;
        const logId = logdate.split('=')[0]
        const date = logdate.split('=')[1]

        if (!logId) {
            this.setState({ error: 'log id is missing'})
        }
        if (!date) {
            this.setState({ error: 'date is missing'})
        }

        
        this.setState({ loading: false })
    }
    render() {
        const { loading, error } = this.state
        
        if ( loading ) {
            return <Spinner />
        }
        if ( error ) {
            return <MissingPage message={error} />
        }
        return (
            <div className='log-view'>
                LOGS
            </div>
        )
        // const { blocks } = this.state
        // const { logs } = this.props
        // return (
        //     <div className='log-view'>
        //         {logs.title}
        //         {blocks}
        //     </div>
        // )
    }
}

export default LogView