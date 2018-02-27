import React, {Component} from 'react';
import '../styles/messagelist.css';

class MessageList extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            messages: [],
            newMessage: ""
        }

        this.messagesRef = this.props.firebase.database().ref("messages");
    }

    componentDidMount() {
        this.messagesRef.on("child_added", snapshot => {
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat(message) })
        });
    }

    handleChange(e) {
        this.setState({ newMessage: e.target.value })
    }

    sendMessage(e) {
        const user = this.props.user ? this.props.user.displayName : "Guest";
        e.preventDefault();
        if(!this.state.newMessage) { return; }
        this.messagesRef.push({
            
            content: this.state.newMessage,
            roomId: this.props.activeRoomId,
            sentAt: this.props.firebase.database.ServerValue.TIMESTAMP,
            userName: user

        });
        this.setState({ newMessage: "" })
    }

    render() {
        return(
            <section className="message-list">
                <ul className="messages" >
                    {
                        this.state.messages.map( (message, index) => {
                        if(message.roomId === this.props.activeRoomId){
                            return(
                                <li className="message" key={index}>
                                    <div className="message-info">
                                        <div className="username">{message.userName}:</div>
                                        <div>
                                        <span className="message-content">{message.content}</span>
                                        <span className="time-sent">{message.sentAt}</span>
                                        </div>
                                    </div>
                                </li>
                                )
                            }
                        })
                    }
                </ul>
                <form onSubmit={(e) => this.sendMessage(e)}>
                    <input type="text" className="message-input" placeholder="New Message..." value={this.state.newMessage} onChange={(e) => this.handleChange(e)} />
                    <input type="submit" value="Send" />
                </form>
            </section>
        );
    }
}

export default MessageList;