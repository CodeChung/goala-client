import React, { Component } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './BlocksPage.css';
import BlocksService from '../../services/blocks-service';
import Title from '../../components/ToolBox/Blocks/Title/Title';
import Count from '../../components/ToolBox/Blocks/Count/Count';
import Notes from '../../components/ToolBox/Blocks/Notes/Notes';
import CheckList from '../../components/ToolBox/Blocks/CheckList/CheckList';
import Text from '../../components/ToolBox/Blocks/Text/Text';
import Weekly from '../../components/ToolBox/Blocks/Weekly/Weekly';
import CountDown from '../../components/ToolBox/Blocks/CountDown/CountDown';
import Date from '../../components/ToolBox/Blocks/Date/Date';
import Sequence from './Sequence';
import Trash from '../../components/ToolBox/Blocks/Trash/Trash';

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
};
/**
 * Moves an item from one list to another list.
 */
const copy = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const item = sourceClone[droppableSource.index];

    destClone.splice(droppableDestination.index, 0, { ...item, id: uuid() });
    return destClone;
};

const move = (source, destination, droppableSource, droppableDestination) => {
    const sourceClone = Array.from(source);
    const destClone = Array.from(destination);
    const [removed] = sourceClone.splice(droppableSource.index, 1);

    destClone.splice(droppableDestination.index, 0, removed);

    const result = {};
    result[droppableSource.droppableId] = sourceClone;
    result[droppableDestination.droppableId] = destClone;

    return result;
};

const grid = 8;

const Content = styled.div`
    margin-right: 200px;
`;

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

const Clone = styled(Item)`
    ~ div {
        transform: none !important;
    }
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

const Kiosk = styled(List)`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 200px;
`;

const Container = styled(List)`
    margin: 0.5rem 0.5rem 1.5rem;
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

const Button = styled.button`
    display: flex;
    align-items: center;
    align-content: center;
    justify-content: center;
    margin: 0.5rem;
    padding: 0.5rem;
    color: #000;
    border: 1px solid #ddd;
    background: #fff;
    border-radius: 3px;
    font-size: 1rem;
    cursor: pointer;
`;

const ButtonText = styled.div`
    margin: 0 1rem;
`;

// 'task-2': { id: 'task-2', content: <Clock /> },
//         'task-3': { id: 'task-3', content: <YesNo />},
//         'task-4': { id: 'task-4', content: <Count value={({ num: '', den: '', units: ''})} /> },
//         'task-5': { id: 'task-5', content: <Notes /> },
//         'task-6': { id: 'task-6', content: <Text /> },
//         'task-7': { id: 'task-7', content: <CheckList /> },
//         'task-8': { id: 'task-8', content: <Weekly /> },
//         'task-9': { id: 'task-9', content: <CountDown /> },
//         'task-10': { id: 'task-10', content: <Date value={({ date: new Date() })}/> },
//         'task-12': { id: 'task-12', content: <Trash /> },

const ITEMS = [
    {
        id: uuid(),
        content: <Title />
    },
    {
        id: uuid(),
        content: <Count value={({ num: '', den: '', units: ''})} /> 
    },
    {
        id: uuid(),
        content: <Notes />
    },
    {
        id: uuid(),
        content: <Text />
    },
    {
        id: uuid(),
        content: <CheckList />
    },
    {
        id: uuid(),
        content: <Weekly />
    },
    {
        id: uuid(),
        content: <CountDown />
    },
    {
        id: uuid(),
        content: <Date />
    },
    {
        id: uuid(),
        content: <CheckList />
    },
];

class BlocksPage extends Component {
    state = {
        active: [],
        blocks: [],
        trash: []
    };
    componentDidMount() {
        // Determines if block form is goal or reminder
        // then it fetches <Block /> components based on blockId
        const { active } = this.state
        const { goal, reminder } = this.props
        console.log(goal, reminder)
        
        if (goal) {
            const blockSeq = goal.block_sequence
            console.log('BLOCK SEQUENCE ', blockSeq)
            BlocksService.getBlocksByIds(blockSeq)
                .then(blocks => console.log('BLOCKS BY ID, ', blocks))
        }

        if (reminder) {

        }
    }
    onDragEnd = result => {
        const { source, destination } = result;

        // dropped outside the list
        if (!destination) {
            return;
        }

        switch (source.droppableId) {
            case destination.droppableId:
                this.setState({
                    [destination.droppableId]: reorder(
                        this.state[source.droppableId],
                        source.index,
                        destination.index
                    )
                });
                break;
            case 'ITEMS':
                this.setState({
                    [destination.droppableId]: copy(
                        ITEMS,
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                });
                break;
            default:
                this.setState(
                    move(
                        this.state[source.droppableId],
                        this.state[destination.droppableId],
                        source,
                        destination
                    )
                );
                break;
        }
    };

    addList = e => {
        this.setState({ [uuid()]: [] });
    };

    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        return (
            <section className='blocks-page'>
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="ITEMS" isDropDisabled={true}>
                        {(provided, snapshot) => (
                            <Kiosk
                                className='toolbox-list'
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}>
                                {ITEMS.map((item, index) => (
                                    <Draggable
                                        key={item.id}
                                        draggableId={item.id}
                                        index={index}>
                                        {(provided, snapshot) => (
                                            <React.Fragment>
                                                <Item
                                                    className='block-container'
                                                    ref={provided.innerRef}
                                                    {...provided.draggableProps}
                                                    {...provided.dragHandleProps}
                                                    isDragging={snapshot.isDragging}
                                                    style={
                                                        provided.draggableProps
                                                            .style
                                                    }>
                                                    {item.content}
                                                </Item>
                                                {snapshot.isDragging && (
                                                    <Clone>{item.content}</Clone>
                                                )}
                                            </React.Fragment>
                                        )}
                                    </Draggable>
                                ))}
                            </Kiosk>
                        )}
                    </Droppable>
                    <Content>
                        <div className='blocks-page-header'>
                            <Button onClick={() => this.props.toggleForm()} >
                                <FontAwesomeIcon 
                                    className='reminder-toggle' 
                                    icon={faArrowAltCircleLeft} />
                                <ButtonText>Return</ButtonText>
                            </Button>
                            <Title value={({title: 'Title'})} />
                        </div>
                        <div className='blocks-saved'>
                            {Object.keys(this.state).map((list, i) => (
                                <Droppable key={list} droppableId={list}>
                                    {(provided, snapshot) => (
                                        list !== 'trash'
                                        ?
                                        <Sequence provided={provided} snapshot={snapshot} list={this.state.blocks} />
                                        :
                                        <Trash provided={provided} snapshot={snapshot} list={[]}/>
                                    )}
                                </Droppable>
                            ))}
                        </div>
                        
                    </Content>
                </DragDropContext>
            </section>
            
        );
    }
}

export default BlocksPage;