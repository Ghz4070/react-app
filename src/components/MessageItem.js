import React from 'react'

const MessageItem = (props) => {
    return (
        <li>
            <span>user : {props.message.user}</span>
            <div>message : {props.message.msg}</div><br></br><hr></hr>
        </li>
    );
};

export default MessageItem;