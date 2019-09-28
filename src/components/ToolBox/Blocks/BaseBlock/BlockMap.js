import React from 'react';
import Weekly from "../Weekly/Weekly";
import CheckList from '../CheckList/CheckList';
import Clock from '../Clock/Clock';
import Count from '../Count/Count';
import CountDown from '../CountDown/CountDown';
import Date from '../Date/Date';
import Notes from '../Notes/Notes';
import Text from '../Text/Text';
import Trash from '../Trash/Trash';
import Title from '../Title/Title';
import YesNo from '../YesNo/YesNo';
// key: block-type, value: block component

function BlockMap(type, value) {
    switch(type) {
        case 'checklist':
            return <CheckList value={value} />
        case 'clock':
            return <Clock value={value} />
        case 'count':
            return <Count value={value} />
        case 'countdown':
            return <CountDown value={value} />
        case 'date':
            return <Date value={value} />
        case 'notes':
            return <Notes value={value} />
        case 'text':
            return <Text value={value} />
        case 'title':
            return <Title value={value} />
        case 'trash':
                return <Trash value={value} />
        case 'weekly':
            return <Weekly value={value} />
        case 'yesno':
            return <YesNo value={value} />
        default:
            return null
    }
}

export default BlockMap