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
                                    <label htmlFor="inputDescription">
                                        Description
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="inputAmount">
                                        Amount
                                    </label>
                                </td>
                                <td>
                                    <label htmlFor="inputDate">
                                        Date
                                    </label>
                                </td>
                            </tr>
                            <tr>
                                <td>
                                    <input
                                        id="inputDescription"
                                        name="inputDescription"
                                        type="text"
                                        value={this.props.newDescription}
                                        placeholder="New Flavor Town"
                                        onChange={this.props.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        id="inputAmount"
                                        name="inputAmount"
                                        type="decimal"
                                        value={this.props.newAmount}
                                        placeholder="0.00"
                                        onChange={this.props.handleInputChange}
                                    />
                                </td>
                                <td>
                                    <input
                                        id="inputDate"
                                        name="inputDate"
                                        type="text"
                                        value={this.props.submitDate.toISOString()}
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