import React from 'react'
import MessageList from './MessageList'
import MessageBar from './MessageBar'

class Chat extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MessageList />
                    <MessageBar />
                </header>
            </div>
        );
    }
}

export default Chat;

// les props sont servie dans les component enfants ( declarer dans le parent et utilise dans l'enfant )
// les states dans le meme fichier 