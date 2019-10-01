import React from 'react';
import './Tile.css';
import BlocksService from '../../services/blocks-service';
import BlockMap from '../ToolBox/Blocks/BaseBlock/BlockMap';

function Tile(tile, addTile) {
    const { id, user_id, action_id, title, last_logged, block_sequence } = tile;

    // STORING the blocks with type and value for BLOCKMAP
    // tileBlocks returns an array of objects that contain goal_id/reminder_id possibly null
    // the type and value !important
    // 
    let tileBlocks

    BlocksService.getBlocksByIds(block_sequence)
                .then(blocks => {
                    tileBlocks = blocks
                    addTile(tileBlocks)
                })
                .catch()

    if (action_id) {


        return ` <div contentEditable='false' class='text-stamp-container'><button onClick={console.log('hello')} class='entry-text-stamp'> ${title} </button><div class='stamp-hidden'>Hide me</div></div> `
    }




    // BlocksService.getBlocksByIds(tile.blockSeq)
    //     .then(blocks => {
    //         const blockus = blocks.map(block => {
    //             return BlockMap(block.type, block.value)
    //         })
    //     })
    return ` <div contentEditable='false' class='text-stamp-container'><button onClick={console.log('hello')} class='entry-text-stamp'> ${tile.title} </button><div class='stamp-hidden'>Hide me</div></div> `
}

export default Tile;