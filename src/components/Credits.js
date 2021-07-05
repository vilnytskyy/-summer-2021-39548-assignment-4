import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import credit from '../imgs/credit.png';

class Credits extends Component {
    render() {
        return (
            <div>
                <img src={credit} alt="Credit Card by Ricki Tri Putra from the Noun Project" />
                <h1>Credits</h1>
                
                <Link className="link" id="home" to="/">Return to Home</Link>
            </div>
        );
    }
}

export default Credits;