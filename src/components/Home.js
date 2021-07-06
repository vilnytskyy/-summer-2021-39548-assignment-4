import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import AccountBalance from './AccountBalance';
import bank from '../imgs/piggybank.png';

class Home extends Component {
    render() {
        return (
            <div className="Home">
                <div className="Home-header">
                    <img src={bank} alt="piggybank" />
                    <h1>Bank of React</h1>
                </div>

                <Link className="link" to="/userProfile">User Profile</Link>
                <Link className="link" to="/credits">Credits</Link>
                <Link className="link" to="/debits">Debits</Link>

                <div>
                    <AccountBalance accountBalance={this.props.accountBalance} />
                </div>
            </div>
        );
    }
}

export default Home;