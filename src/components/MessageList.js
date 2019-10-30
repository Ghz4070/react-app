import React, { Component } from 'react'
import MessageItem from './MessageItem'
import { connect } from 'react-redux'
import { getMessages } from './../redux/action'

class MessageList extends Component {
    componentDidMount = () => {
        this.props.dispatch(getMessages());
    }

    render() {
        //onsole.log(this.props);
        return (
            <ul>
                {this.props.msg.messages.map((message, index) => {
                    return <MessageItem key={index} message={message} />
                })}
            </ul>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        msg: state.messages
    }
}

const connectComponent = connect(mapStateToProps)

export default connectComponent(MessageList);     