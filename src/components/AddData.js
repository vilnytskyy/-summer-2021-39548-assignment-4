// Component based on code from https://reactjs.org/docs/forms.html
// that details controlled components and handling multiple inputs
import React, { Component } from 'react';

class AddData extends Component {
    render() {
        const DataName = "Add " + this.props.name;

        return (
            <div className="Form">
                <form onSubmit={this.props.handleSubmit}>
                    <label htmlFor="description">
                        Description:
                        <input
                            id="description"
                            name="description"
                            type="text"
                            placeholder="New Flavor Town"
                            // value={this.state.description}
                            onChange={this.props.handleInputChange} />
                    </label>
                    <label htmlFor="amount">
                        Amount:
                        <input
                            id="amount"
                            name="amount"
                            type="decimal"
                            placeholder="0.00"
                            // value={this.state.amount}
                            onChange={this.props.handleInputChange} />
                    </label>
                    <input type="submit" value={DataName} />
                </form>
            </div>
        );
    }
}

export default AddData;