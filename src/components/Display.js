import React, { Component } from 'react';

class Display extends Component {
    render() {
        const {
            id,
            description,
            amount,
            date
        } = this.props.data;

        return (
            <tr className={"Display " + id}>
                <td className="description">{description}</td>
                <td className="amount">{parseFloat(amount).toFixed(2)}</td>
                <td>{date}</td>
            </tr>
        );
    }
}

export default Display;