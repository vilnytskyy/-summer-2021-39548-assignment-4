// Component based on code from https://reactjs.org/docs/forms.html
// that details controlled components and handling multiple inputs
import React, { Component } from 'react';

class AddData extends Component {
    render() {
        const DataName = "Add " + this.props.name;
        // console.log(this.props.submitDate);

        return (
            <div>
                <form onSubmit={this.props.handleSubmit}>
                    <table className="addDataTable">
                        <tbody>
                            <tr>
                                <td>
                                    <label htmlFor="description">
                                        Description
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="amount">
                                        Amount
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="date">
                                        Date
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        id="description"
                                        name="description"
                                        type="text"
                                        placeholder="New Flavor Town"
                                        onChange={this.props.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        id="amount"
                                        name="amount"
                                        type="decimal"
                                        placeholder="0.00"
                                        onChange={this.props.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        id="date"
                                        name="date"
                                        type="text"
                                        value={this.props.submitDate}
                                        disabled
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        <input type="submit" value={DataName} />

                    </div>
                </form>
            </div>
        );
    }
}

export default AddData;