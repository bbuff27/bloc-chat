import React, { Component } from 'react';
import '../styles/user.css'

class User extends Component {

    componentDidMount(){
            this.props.firebase.auth().onAuthStateChanged( user => {
                this.props.setUser(user);
            });
    }

    signIn() {
        const provider = new this.props.firebase.auth().GoogleAuthProvider();
        this.props.firebase.auth().signInWithPopup(provider);
    }

    signOut() {
        this.props.firebase.auth().signOut();
    }

    render() {
        return(
            <div className="user-signin">
                <section className="login-status">
                    <h6>Logged in as {this.props.user ? this.props.user.displayName : "Guest"}</h6>
                </section>
                <section classname="login-button">
                {
                    this.props.user
                    ? <button className="log-out" onClick={this.signOut}>Log Out</button>
                    : <button className="login" onClick={this.signIn}>Login</button>
                }
                </section>
            </div>
        )
    }
}

export default User;