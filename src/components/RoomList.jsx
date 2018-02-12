import React, { Component } from 'react';

class RoomList extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            rooms: []
        };
    }
    
    render() {
        return(
            <h1>Hello World!</h1>
        );
    }
}

export default RoomList;