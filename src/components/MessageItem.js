import React from 'react'

const styleLi = { marginBottom: 10,backgroundColor: "lightblue", padding: 10, borderRadius: 10 }

const MessageItem = (props) => {
    return (
        <li style={styleLi}>
            <span>@{props.message.user}</span>
            <div>– {props.message.msg} -</div>
        </li>
    );
};

export default MessageItem;