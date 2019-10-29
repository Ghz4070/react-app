import React from 'react'
import MessageItem from './MessageItem'

class MessageList extends React.Component {
    
    render() {
        return (
            <ul>
                {this.props.msg.map((message, index) => {
                    return <MessageItem key={index} message={message} />
                })}
            </ul>
        )
    }
}

export default MessageList;     