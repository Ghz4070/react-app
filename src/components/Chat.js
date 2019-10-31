import React from 'react'
import MessageListContainer from './../containers/MessageListContainer'
import MessageBar from './MessageBar'
import logo from './../assets/logo.svg'

class Chat extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
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