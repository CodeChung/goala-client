import React from 'react';
import './LogView.css';
import BaseBlock from '../../components/ToolBox/Blocks/BaseBlock/BaseBlock';

class LogView extends React.Component {
    state = {
        blocks: []
    }
    componentDidMount() {
        debugger
        const { logs } = this.props
        const blocks = logs[0].map((log, index) => {
            return <BaseBlock block={log}/>
        })
        this.setState({ blocks })
    }
    render() {
        const { blocks } = this.state
        const { logs } = this.props
        return (
            <div className='log-view'>
                {logs.title}
                {blocks}
            </div>
        )
    }
}

export default LogView