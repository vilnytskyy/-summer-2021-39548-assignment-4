import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import user from '../imgs/user.png';

class UserProfile extends Component {
    render() {
        return (
            <div className="UserProfile">
                <div className="UserProfile-header">
                    <img src={user} alt="userImg" />
                    <h1>User Profile</h1>
                </div>

                <Link className="link" to="/">Return to Home</Link>

                <div>
                    <div>
                        <label>Username </label>
                        : {this.props.userName}</div>
                    <div>
                        <label>Member Since </label>
                        : {this.props.memberSince}</div>
                </div>
            </div>
        );
    }
}

export default UserProfile;
