import React, { Component } from 'react';

class AccountBalance extends Component {
    render() {
        return (
            <div className="balance">
                <label>Account Balance </label>
                : {this.props.accountBalance}
            </div>
        );
    }
}

export default AccountBalance;