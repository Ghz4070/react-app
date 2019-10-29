import React from 'react'
import Emoji from 'react-emoji-render';

const styleLi = { marginBottom: 10, backgroundColor: "lightblue", padding: 10, borderRadius: 10 }

const MessageItem = (props) => {
    return (
        <li style={styleLi}>
            {/** <span>@{props.message.user}</span> **/}
            <Emoji text={props.message} />
        </li>
    );
};

export default MessageItem;