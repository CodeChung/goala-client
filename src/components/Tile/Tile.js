import './Tile.css';
import moment from 'moment';

function Tile(tile, date) {
    const { type, id, title, } = tile;

    // STORING the blocks with type and value for BLOCKMAP
    // tileBlocks returns an array of objects that contain goal_id/reminder_id possibly null
    // the type and value !important
    // 
    // let tileBlocks
    // BlocksService.getBlocksByIds(block_sequence)
    //             .then(blocks => {
    //                 tileBlocks = blocks
    //             })
    //             .catch()
    let logId
    let logDate = moment(date).format('MM-DD-YYYY')

    if (type === 'goal') {
        logId = `g-${id}=${logDate}`
    } else if (type === 'reminder') {
        logId = `r-${id}=${logDate}`
    }

    return `<a href='/logs/${logId}' contentEditable='false' class='text-stamp-container'> <button class='entry-text-stamp'> ${title} </button><div class='stamp-hidden'>Hide me</div> </a>`
}

export default Tile;