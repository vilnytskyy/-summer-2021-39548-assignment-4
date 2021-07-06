// Component Based on code from https://reactjs.org/docs/forms.html
// that details controlled components and handling multiple inputs
import React, { Component } from 'react';

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "initial-d",
            amount: "initial-a"
        };

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    handleSubmit(event) {
        alert('Description: ' + this.state.description + '\nAmount: ' + this.state.amount);
        event.preventDefault();
    }

    render() {
        const DataName = "Add " + this.props.name;
        
        return (
            <form onSubmit={this.handleSubmit}>
                <label>
                    Description:
                    <input
                        name="description"
                        type="text"
                        checked={this.state.description}
                        onChange={this.handleInputChange} />
                </label>
                <label>
                    Amount:
                    <input
                        name="amount"
                        type="number"
                        value={this.state.amount}
                        onChange={this.handleInputChange} />
                </label>
                <input type="submit" value={DataName} />
            </form>
        );
    }
}

export default AddData;