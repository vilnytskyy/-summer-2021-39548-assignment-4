import React, { Component } from 'react';
import bank from '../imgs/piggybank.png';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={bank} alt="piggybank"/>
                <h1>Bank of React</h1>
            </div>
        );
    }
}

export default Home;