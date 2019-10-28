import React from 'react'
import MessageList from './MessageList'
import MessageBar from './MessageBar'

function Chat() {
    return (
        <div className="App">
            <header className="App-header">
                <MessageList />
                <MessageBar />
            </header>
        </div>
    );
}

export default Chat;