// Component Based on code from https://reactjs.org/docs/forms.html
// that details controlled components and handling multiple inputs
import React, { Component } from 'react';

class AddData extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: "",
            amount: 0,
            date: ""
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
        this.setState({ date: Date() });
        alert('Description: ' + this.state.description + '\nAmount: ' + this.state.amount + '\nDate: ' + this.state.date);
        event.preventDefault();
    }

    render() {
        const DataName = "Add " + this.props.name;

        return (
            <div className="Form">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="description">
                        Description:
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="Good Food Inc"
                            // value={this.state.description}
                            onChange={this.handleInputChange} />
                    </label>
                    <label htmlFor="amount">
                        Amount:
                        <input
                            id="amount"
                            name="amount"
                            type="decimal"
                            placeholder="0.00"
                            // value={this.state.amount}
                            onChange={this.handleInputChange} />
                    </label>
                    <input type="submit" value={DataName} />
                </form>
            </div>
        );
    }
}

export default AddData;