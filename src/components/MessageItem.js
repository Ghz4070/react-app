import React from 'react'
import Emoji from 'react-emoji-render';

const styleLi = { marginBottom: 10, backgroundColor: "lightblue", padding: 10, borderRadius: 10 }
const styleSpan = { marginBottom: 10, padding: 10 }

const MessageItem = (props) => {
    console.log(props)
    return (
        <li style={styleLi}>
            <span style={styleSpan}>@{props.message.username} :</span>
            <Emoji text={props.message.message} />
        </li>
    );
};

export default MessageItem;