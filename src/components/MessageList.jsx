import React, {Component} from 'react';
import '../styles/messagelist.css';

class MessageList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            messages: []
        }

        this.messagesRef = this.props.firebase.database().ref("messages");
    }

    componentDidMount(){
        this.messagesRef.child("messages").orderByChild(this.props.activeRoomId).equalTo(this.props.activeRoomId).on("child_added", snapshot =>{
            const message = snapshot.val();
            message.key = snapshot.key;
            this.setState({ messages: this.state.messages.concat(message) })
        });
    }

    render(){
        return(
            <section className="message-list">
                <h3>{this.props.activeRoomId}</h3>
                <ul className="messages" >
                    {
                        this.state.messages.map( (message, index) =>
                            <li className="message" key={index}>
                                <div><span className="username">{message.userName}</span><span className="time-sent">{message.sentAt}</span></div>
                                <div className="content">{message.content}</div>
                            </li>
                        )
                    }
                </ul>
            </section>
        );
    }
}

export default MessageList;