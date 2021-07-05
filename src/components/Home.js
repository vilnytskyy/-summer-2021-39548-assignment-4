import React, { Component } from 'react';
import AccountBalance from './AccountBalance';
import { Link } from 'react-router-dom';
import bank from '../imgs/piggybank.png';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={bank} alt="piggybank" />
                <h1>Bank of React</h1>

                <Link className="link" to="/userProfile">User Profile</Link>
                <Link className="link" to="/credits">Credits</Link>
                <Link className="link" to="/debits">Debits</Link>

                <AccountBalance accountBalance={this.props.accountBalance} />
            </div>
        );
    }
}

export default Home;