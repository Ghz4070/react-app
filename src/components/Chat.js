import React from 'react'
import MessageListContainer from './../containers/MessageListContainer'
import MessageBar from './MessageBar'

class Chat extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MessageListContainer />
                    <MessageBar />
                </header>
            </div>
        );
    }
}

export default Chat;

// les props sont servie dans les component enfants ( declarer dans le parent et utilise dans l'enfant )
// les states dans le meme fichier 