import React, { Component } from 'react';

class RoomList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            rooms: []
        };

        this.roomsRef = this.props.firebase.database().ref("rooms");
    }

    componentDidMount(){
        this.roomsRef.on("child_added", snapshot =>{
            const rooms = snapshot.val();
            rooms.key = snapshot.key;
            this.setState({ rooms: this.state.rooms.concat( rooms ) });
        });
    }
    
    render() {
        return(
            <section className="sidebar">
                <ul>
                    {
                        this.state.rooms.map( (room, index) => {
                            
                        })
                    }
                </ul>
            </section>
        );
    }
}

export default RoomList;