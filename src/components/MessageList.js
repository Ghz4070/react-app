import React, { Component } from 'react'
import MessageItem from './MessageItem'
import { connect } from 'react-redux'

class MessageList extends Component {

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

const mapStateToProps = (state /*, ownProps*/) => {
    return {
        msg: state.messages
    }
}

const connectComponent = connect(mapStateToProps)

export default connectComponent(MessageList);     