import React from 'react'
import MessageItem from './MessageItem'

class MessageList extends React.Component {
    state = {
        messages: [
            // <MessageBar {props.value} />,
            { msg: "Yo, Rien et toi ?", user: "Titi" },
            { msg: "Rien aussi.", user: "Toto" }
        ]
    };

    render() {
        return (
            <ul>
                {this.state.messages.map((message, index) => {
                    return <MessageItem key={index} message={message} />
                })}
            </ul>
        )
    }
}

export default MessageList;