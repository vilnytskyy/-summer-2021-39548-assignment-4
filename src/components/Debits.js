import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import debit from '../imgs/debit.png';
import Display from './Display';

class Debits extends Component {
    render() {
        const debitRow = this.props.debitInfo.map((temp) =>
            <Display data={temp} key={temp.id}/>
            // <tr key={temp.id}>
            //     <td>{temp.id}</td>
            //     <td>{temp.description}</td>
            //     <td>{temp.amount}</td>
            //     <td>{temp.date}</td>
            // </tr>
        );

        return (
            <div className="Debits">
                <div className="Debits-header">
                    <img src={debit} alt="debit card by mpanicon from the Noun Project" />
                    <h1>Debits</h1>
                </div>

                <Link className="link" id="home" to="/">Return to Home</Link>

                <div>
                    <table>
                        <tbody>
                            <tr>
                                <td>ID</td>
                                <td>Description</td>
                                <td>Amount</td>
                                <td>Date</td>
                            </tr>
                            {debitRow}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default Debits;