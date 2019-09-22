import React from 'react';
import './ToolBox.css';
import ActionTools from './ActionTools/ActionTools';

class ToolBox extends React.Component {

    render() {
        const { view } = this.props
        switch (view) {
            case 'action':
                return <ActionTools />
            default:
                return <div />
        }
    }
}

export default ToolBox;