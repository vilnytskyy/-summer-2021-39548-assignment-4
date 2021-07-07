import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import debitImg from '../imgs/debit.png';
import Display from './Display';
import AccountBalance from './AccountBalance';
import AddData from './AddData';

class Debits extends Component {
    render() {
        const row = this.props.debitInfo.map((temp) =>
            <Display data={temp} key={temp.id} />
        );

        return (
            <div className="Debits">
                <div className="Debits-header">
                    <img src={debitImg} alt="debit card by mpanicon from the Noun Project" />
                    <h1>Debits</h1>
                </div>

                <Link className="link" id="home" to="/">Return to Home</Link>

                <div>
                    <AccountBalance accountBalance={this.props.accountBalance} />
                </div>

                <div>
                    <table>
                        <tbody>
                            <tr id="info">
                                <td>Description</td>
                                <td>Amount</td>
                                <td>Date</td>
                            </tr>
                            {row}
                        </tbody>
                    </table>
                </div>

                <div>
                    <AddData data={this.props.debitInfo} name={"Debits"} submitDate={this.props.submitDate}
                        handleSubmit={this.props.handleSubmit} handleInputChange={this.props.handleInputChange} />
                </div>
            </div>
        );
    }
}

export default Debits;