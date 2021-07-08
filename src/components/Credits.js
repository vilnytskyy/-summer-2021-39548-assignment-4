import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import creditImg from '../imgs/credit.png';
import Display from './Display';
import AccountBalance from './AccountBalance';
import AddCredits from './AddCredits';

class Credits extends Component {
    render() {
        const row = this.props.creditInfo.map((temp) =>
            <Display data={temp} key={temp.id}/>
        );

        return (
            <div className="Credits">
                <div className="Credits-header">
                    <img src={creditImg} alt="Credit Card by Ricki Tri Putra from the Noun Project" />
                    <h1>Credits</h1>
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
                    <AddCredits submitDate={this.props.submitDate}
                        addCredit={this.props.addCredit} handleInputChange={this.props.handleInputChange}
                        newDescription={this.props.inputDescription} newAmount={this.props.inputAmount} />
                </div>
            </div>
        );
    }
}

export default Credits;