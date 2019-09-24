import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, } from '@fortawesome/free-solid-svg-icons';
import propTypes from 'prop-types';
import styled from 'styled-components';
import { Draggable } from 'react-beautiful-dnd';
import './Trash.css';

const sequence = []

const Item = styled.div`
    display: flex;
    user-select: none;
    padding: 0.5rem;
    margin: 0 0 0.5rem 0;
    align-items: flex-start;
    align-content: flex-start;
    line-height: 1.5;
    border-radius: 3px;
    background: #fff;
    border: 1px ${props => (props.isDragging ? 'dashed #000' : 'solid #ddd')};
`;

const Notice = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    padding: 0.5rem;
    margin: 0 0.5rem 0.5rem;
    border: 1px solid transparent;
    line-height: 1.5;
    color: #aaa;
`;

const Handle = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    user-select: none;
    margin: -0.5rem 0.5rem -0.5rem -0.5rem;
    padding: 0.5rem;
    line-height: 1.5;
    border-radius: 3px 0 0 3px;
    background: #fff;
    border-right: 1px solid #ddd;
    color: #000;
`;

const List = styled.div`
    border: 1px
        ${props => (props.isDraggingOver ? 'dashed #000' : 'solid #ddd')};
    background: #fff;
    padding: 0.5rem 0.5rem 0;
    border-radius: 3px;
    flex: 0 0 150px;
    font-family: sans-serif;
`;

const Container = styled(List)`
    margin: 0.5rem 0.5rem 1.5rem;
`;

class Trash extends React.Component {
    state = {
        sequence: []
    }
    componentDidMount() {
        // fetch sequence and store in state
        this.setState({ sequence })
    }
    render() {
        const { provided, snapshot, list } = this.props
        return (
            <Container
                className='block-trash'
                ref={provided.innerRef}
                isDraggingOver={snapshot.isDraggingOver}>
                <FontAwesomeIcon icon={faTrashAlt} />
                {list.length
                    ? list.map(
                        (item, index) => (
                            <Draggable
                                key={item.id}
                                draggableId={item.id}
                                index={index}>
                                {(provided, snapshot) => (
                                    <Item
                                        className='block-container-saved'
                                        ref={
                                            provided.innerRef
                                        }
                                        {...provided.draggableProps}
                                        isDragging={
                                            snapshot.isDragging
                                        }
                                        style={
                                            provided
                                                .draggableProps
                                                .style
                                        }>
                                        <Handle
                                            {...provided.dragHandleProps}>
                                            <svg
                                                width="24"
                                                height="24"
                                                viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M3,15H21V13H3V15M3,19H21V17H3V19M3,11H21V9H3V11M3,5V7H21V5H3Z"
                                                />
                                            </svg>
                                        </Handle>
                                        {item.content}
                                    </Item>
                                )}
                            </Draggable>
                        )
                    )
                    : !provided.placeholder && (
                        <Notice>Drop items here</Notice>
                    )}
                {provided.placeholder}
            </Container>
        )
    }
}

Trash.defaultProps = {
    value: propTypes.object
}

export default Trash;
