import React, { Component } from 'react'
import MessageItem from './MessageItem'

class MessageList extends Component {
    render() {
        // console.log(this.props.msg.messages.lenght)
        return (
            <ul>
                {this.props.msg.messages.map((message, index) => {
                    return <MessageItem key={index} message={message} />
                })}
                {this.props.msg.messages.lenght === 0 && <li>Aucun message</li>}
            </ul>
        )
    }
}

export default MessageList;     