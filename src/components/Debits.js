import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debit from '../imgs/debit.png';

class Debits extends Component {
    render() {
        return (
            <div>
                <img src={debit} alt="debit card by mpanicon from the Noun Project" />
                <h1>Debits</h1>
                
                <Link className="link" id="home" to="/">Return to Home</Link>
            </div>
        );
    }
}

export default Debits;