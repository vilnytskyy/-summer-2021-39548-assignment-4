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
                <td>{id}</td>
                <td>{description}</td>
                <td>{amount}</td>
                <td>{date}</td>
            </tr>
        );
    }
}

export default Display;