import React from 'react';
import propTypes from 'prop-types';
import './BaseBlock.css';
import BlockMap from './BlockMap';

// Prototype for different Blocks
// also where we figure out size (TODO)
class BaseBlock extends React.Component {
    state = {
        size: null,
    }
    componentDidMount() {
        const { dimension } = this.props
        this.setState({ size: dimension })
    }
    render() {
        const { block } = this.props
        const Block = BlockMap(block.type, block.value)
        return (
            <div className='Base-Block'>
                {Block}
            </div>
        )
    }
}

BaseBlock.defaultProps = {
    value: propTypes.object
}

export default BaseBlock;