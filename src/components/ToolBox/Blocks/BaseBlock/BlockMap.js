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

function BlockMap(type, value, log) {
    switch(type) {
        case 'checklist':
            return <CheckList value={value} log={log} />
        case 'clock':
            return <Clock value={value} log={log} />
        case 'count':
            return <Count value={value} log={log} />
        case 'countdown':
            return <CountDown value={value} log={log} />
        case 'date':
            return <Date value={value} log={log} />
        case 'notes':
            return <Notes value={value} log={log} />
        case 'text':
            return <Text value={value} log={log} />
        case 'title':
            return <Title value={value} log={log} />
        case 'trash':
                return <Trash value={value} log={log} />
        case 'weekly':
            return <Weekly value={value} log={log} />
        case 'yesno':
            return <YesNo value={value} log={log} />
        default:
            return null
    }
}

export default BlockMap