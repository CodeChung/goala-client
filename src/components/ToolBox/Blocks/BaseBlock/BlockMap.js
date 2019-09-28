import React from 'react';
import Weekly from "../Weekly/Weekly";

// key: block-type, value: block component

function BlockMap(type, value) {
    switch(type) {
        case 'weekly':
            return <Weekly value={value} />
        default:
            return null
    }
}

export default BlockMap