import React from 'react'
import MessageList from './MessageList'
import MessageBar from './MessageBar'

class Chat extends React.Component {
    constructor(props) {
        super(props);
        this.state = { msg: [] };
    }

    sendMessage = (message) => {
        this.setState({ msg: this.state.msg.concat([message]) });
    }

    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <MessageList msg={this.state.msg} />
                    <MessageBar sendMessage={this.sendMessage} />
                </header>
            </div>
        );
    }

}

export default Chat;

// les props sont servie dans les component enfants ( declarer dans le parent et utilise dans l'enfant )
// les states dans le meme fichier 