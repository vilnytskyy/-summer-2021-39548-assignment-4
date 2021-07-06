import React, { Component } from 'react';

class AccountBalance extends Component {
    render() {
        return (
            <div className="balance">
                Account Balance: {this.props.accountBalance}
            </div>
        );
    }
}

export default AccountBalance;