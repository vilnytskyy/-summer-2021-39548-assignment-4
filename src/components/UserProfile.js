import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../imgs/user.png';

class UserProfile extends Component {
    render() {
        return (
            <div>
                <img src={user} alt="userImg" />
                <h1>User Profile</h1>

                <div>Username: {this.props.userName}</div>
                <div>Member Since: {this.props.memberSince}</div>
                
                <Link className="link" to="/">Return to Home</Link>
            </div>
        );
    }
}

export default UserProfile;
