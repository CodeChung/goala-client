import React, { Component } from 'react';
import uuid from 'uuid/v4';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowAltCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import './BlocksPage.css';
import BlocksService from '../../services/blocks-service';
import Title from '../../components/ToolBox/Blocks/Title/Title';
import BaseBlock from '../../components/ToolBox/Blocks/BaseBlock/BaseBlock';
import Sequence from './Sequence';
import Trash from '../../components/ToolBox/Blocks/Trash/Trash';

const Content = styled.div`
    width: calc(100% - 250px);
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
    box-sizing: border-box;
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 250px;
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

// // ITEMS holds all the sidebar template blocks on the right
const SIDEBAR_ITEMS = [
    {
        id: uuid(),
        type: 'title'
    },
    {
        id: uuid(),
        type: 'count',
    },
    {
        id: uuid(),
        type: 'notes',
    },
    {
        id: uuid(),
        type: 'text',
    },
    {
        id: uuid(),
        type: 'checklist'
    },
    {
        id: uuid(),
        type: 'weekly',
    },
    {
        id: uuid(),
        type: 'countdown',
    },
    {
        id: uuid(),
        type: 'date',
    },
];

// a little function to help us with reordering the result
const reorder = (list, startIndex, endIndex) => {
    console.log(list, startIndex, endIndex)
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    if (endIndex < 0) {
        return result
    }
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

class BlocksPage extends Component {
    state = {
        columns: {
            blocks: [],
            trash: [],
        },
        originalSequence: [],
        error: null,
        title: 'Add Title',
        type: null,
        id: null,
        goal: null,
        reminder: null,
        loading: false,
    };
    componentDidMount() {
        this.setState({ loading: true })

        // Determines if block form is goal or reminder
        // then it fetches <Block /> components based on blockId
        const columns = {}
        const { goal, reminder } = this.props
        
        if (goal) {
            const blockSeq = goal.block_sequence ? goal.block_sequence : []
            console.log('BLOCK SEQUENCE ', blockSeq)
            BlocksService.getBlocksByIds(blockSeq)
                .then(blocks => {
                    columns.blocks = blocks
                    this.setState({ 
                        columns, 
                        id: goal.id,
                        originalSequence: blocks, 
                        originalTitle: goal.title,
                        title: goal.title,
                        type: 'goal' 
                    })
                })
                .catch(err => this.setState({ error: err.error }))
        }

        if (reminder) {
            const blockSeq = reminder.block_sequence ? reminder.block_sequence : []
            BlocksService.getBlocksByIds(blockSeq)
                .then(blocks => {
                    columns.blocks = blocks
                    this.setState({ 
                        columns, 
                        id: reminder.id,
                        originalSequence: blocks, 
                        originalTitle: reminder.title,
                        title: reminder.title,
                        type: 'reminder' 
                    })
                })
                .catch(err => this.setState({ error: err.error }))
        }
        this.setState({ loading: false,type: 'goal'})
    }
    componentWillUnmount() {
        const { columns, id, originalSequence, originalTitle, title, type } = this.state

        if (title !== originalTitle) {
            // updating title
            if (type === 'reminder') {
                this.props.updateReminderTitle(id, title)
            }
            BlocksService.updateTitle(id, title, type)
                .then(newTitle => {
                    let title = newTitle[0].title
                    if (type === 'goal') {
                        this.props.updateGoalTitle(id, title)
                    }
                }) 
                .catch(res => this.setState({ error: res.message }))
        }


    /* Quarantine

        if (JSON.stringify(originalSequence) !== JSON.stringify(columns.blocks)) {
            // if we change the order of our block sequence or add/subtract blocks:
            let newBlocks = []
            columns.blocks.forEach((block, index) => {
                if (!Number.isInteger(block.id)) {
                    newBlocks.push({ block, index })
                }
            }) 
            let goalId = type === 'goal' ? id : null
            let reminderId = type === 'reminder' ? id : null
            BlocksService.createNewBlocks(newBlocks, goalId, reminderId)
             .then(newBlocks => {
                 let blocks = columns.blocks
                 newBlocks.forEach(newBlock => {
                     blocks[newBlock.index] = newBlock.block
                 })

                 BlocksService.updateBlockSequence(newBlocks)
             })
             .catch(res => this.setState({ error: res.message }))
            // columns.blocks.forEach((block, index) => {
            //     if (!Number.isInteger(block.id)) {
            //         let goalId = type === 'goal' ? id : null
            //         let reminderId = type === 'reminder' ? id : null
            //         let dimension = 'col-12'
            //         let value = block.value ? block.value : {}
                    
            //         let newBlock = BlocksService.createBlock(block.type, value, dimension, goalId, reminderId)
            //             .then(res => res)
            //             .catch(res => this.setState({ error: res.error || res.message }))
            //         newBlocks.push(newBlock)
            //     } else {
            //         debugger
            //         let newBlock = BlocksService.updateBlock(block.id, block.value)
            //             .then(res => res)
            //             .catch(res => this.setState({ error: res.error || res.message }))
            //         newBlocks.push(newBlock)
            //     }
            //     debugger
            // })
            // BlocksService.updateBlockSequence(columns.blocks, type, id)
            //     .then(updatedBlocks => {
            //         if (type === 'goal') {
            //             this.setState({ goal: updatedBlocks })
            //         } else if (type === 'reminder') {
            //             this.setState({ reminder: updatedBlocks })
            //         }
            //     })
            //     .catch(res => this.setState({ error: res.error || res.message }))
        }



        */
    }
    onDragEnd = result => {
        const { source, destination } = result;
        // dropped outside the list
        if (!destination) {
            return;
        }
        switch (source.droppableId) {
            // this is for reordering within an array
            // if source matches destination
            case destination.droppableId:
                this.setState({
                    columns: {
                        blocks: reorder(
                        this.state.columns.blocks,
                        source.index,
                        destination.index
                    )}
                });
                break;
            // in case the Tile comes from sidebar 
            // if destination is trash, we ignore
            // if destination is main block, we update blocks with copy
            case 'ITEMS':
                if (destination.droppableId !== 69) {
                    this.setState({
                        columns: {
                            blocks: copy(
                            SIDEBAR_ITEMS,
                            this.state.columns.blocks,
                            source,
                            destination
                        )}
                    });
                }
                break;
            case 'active-blocks':
                console.log('main blocks dont cry')
                if (destination.droppableId === 69) {
                    const blocks = this.state.columns.blocks.filter( (block, index) => index !== source.index )
                    this.setState({ columns: { blocks } })
                }
                break;
            default:
                this.setState(
                    move(
                        this.state.columns[source.droppableId],
                        this.state.columns[destination.droppableId],
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

    changeTitle = title => {
        this.setState({ title })
    }
    // Normally you would want to split things out into separate components.
    // But in this example everything is just done in one place for simplicity
    render() {
        let { loading, title } = this.state
        const activeBlocks = (
            <Droppable key={96} droppableId='active-blocks'>
                {(provided, snapshot) => <Sequence provided={provided} snapshot={snapshot} list={this.state.columns.blocks} />}
            </Droppable>
        )
        const trashBar = (
            <Droppable key={69} droppableId={69}>
                {(provided, snapshot) => <Trash provided={provided} snapshot={snapshot} list={[]} />}
            </Droppable>
        )

        if (loading) {
            return <div>Loading Right Now</div>
        }
        
        if (this.props.goal) {
            title = this.props.goal.title
        }
        if (this.props.reminder) {
            title = this.props.reminder.title
        }

        return (
            <section className='blocks-page'>
                {this.state.error}
                <DragDropContext onDragEnd={this.onDragEnd}>
                    <Droppable droppableId="ITEMS" isDropDisabled={true}>
                        {(provided, snapshot) => (
                            <Kiosk
                                className='toolbox-list'
                                ref={provided.innerRef}
                                isDraggingOver={snapshot.isDraggingOver}>
                                <h3>ToolBox</h3>
                                {SIDEBAR_ITEMS.map((item, index) => (
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
                                                <BaseBlock block={({ type: item.type, value: {value: null} })} />
                                            </Item>
                                        )}
                                    </Draggable>
                                ))}
                            </Kiosk>
                        )}
                    </Droppable>
                    <Content className='blocks-main'>
                        <div className='blocks-page-header'>
                            <Button onClick={() => this.props.toggleForm()} >
                                <FontAwesomeIcon 
                                    className='reminder-toggle' 
                                    icon={faArrowAltCircleLeft} />
                                <ButtonText>Return</ButtonText>
                            </Button>
                            <Title changeTitle={this.changeTitle} value={({ title })} />
                        </div>
                        <div className='blocks-saved'>
                            {activeBlocks}
                            {trashBar}
                        </div>
                        
                    </Content>
                </DragDropContext>
            </section>
            
        );
    }
}

export default BlocksPage