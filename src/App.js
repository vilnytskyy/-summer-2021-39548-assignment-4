import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import axios from 'axios';
import './css/App.css';
import Home from './components/Home';
import UserProfile from './components/UserProfile';
import LogIn from './components/LogIn';
import Credits from './components/Credits';
import Debits from './components/Debits';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            accountBalance: 0.00,
            currentUser: {
                userName: 'vilnytskyy',
                memberSince: '06/27/21'
            },
            debits: [
                {
                    id: "",
                    description: "",
                    amount: 0,
                    date: ""
                }
            ],
            credits: [
                {
                    id: "",
                    description: "",
                    amount: 0,
                    date: ""
                }
            ],
            inputDescription: "",
            inputAmount: 0,
            submitDate: new Date(),
            debitsFound: false,
            creditsFound: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.addDebit = this.addDebit.bind(this);
        this.addCredit = this.addCredit.bind(this);
    }

    // Tick function, and date related funcs, based on code from https://reactjs.org/docs/state-and-lifecycle.html
    // that details how to create a Clock class with local state and lifecycle methods
    tick() {
        this.setState({
            submitDate: new Date()
        });
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    addDebit(event) {
        console.log('Description: ' + this.state.inputDescription + '\nAmount: ' + this.state.inputAmount + '\nDate: ' + this.state.submitDate.toISOString());

        this.setState((state) => ({
            debits: [
                ...state.debits,
                {
                    // Still confused on how to make unique ids/useful ids??
                    // Current id generator breaks if you add more than one debit at the same time
                    id: "AddedDebit@" + state.submitDate.toISOString(),
                    description: state.inputDescription,
                    amount: state.inputAmount,
                    date: state.submitDate.toISOString()
                }
            ],
            accountBalance: (parseFloat(state.accountBalance) - parseFloat(state.inputAmount)).toFixed(2)
        }));

        event.preventDefault();
    }

    addCredit(event) {
        console.log('Description: ' + this.state.inputDescription + '\nAmount: ' + this.state.inputAmount + '\nDate: ' + this.state.submitDate.toISOString());

        this.setState((state) => ({
            credits: [
                ...state.credits,
                {
                    // Still confused on how to make unique ids/useful ids??
                    // Current id generator breaks if you add more than one debit at the same time
                    id: "AddedCredit@" + state.submitDate.toISOString(),
                    description: state.inputDescription,
                    amount: state.inputAmount,
                    date: state.submitDate.toISOString()
                }
            ],
            accountBalance: (parseFloat(state.accountBalance) + parseFloat(state.inputAmount)).toFixed(2)
        }));

        event.preventDefault();
    }

    fetchDebitData = async () => {
        try {
            let response = await axios.get("https://moj-api.herokuapp.com/debits");
            this.setState({ debits: response.data, debitsFound: true });
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({ debitsFound: false });
            }
        }
    }

    fetchCreditData = async () => {
        try {
            let response = await axios.get("https://moj-api.herokuapp.com/credits");
            this.setState({ credits: response.data, creditsFound: true });
        } catch (error) {
            if (error.response) {
                /*
                 * The request was made and the server responded with a
                 * status code that falls out of the range of 2xx
                 */
                console.log(error.response.data); //Not Found
                console.log(error.response.status); //404
                this.setState({ creditsFound: false });
            }
        }
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
        this.fetchDebitData();
        this.fetchCreditData();
    }

    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser };
        newUser.userName = logInInfo.userName;
        this.setState({ currentUser: newUser });
    }

    render() {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
        const CreditsComponent = () => (
            <Credits creditInfo={this.state.credits} accountBalance={this.state.accountBalance}
                addCredit={this.addCredit} handleInputChange={this.handleInputChange} submitDate={this.state.submitDate}
                newDescription={this.state.inputDescription} newAmount={this.state.inputAmount} />);
        const DebitsComponent = () => (
            <Debits debitInfo={this.state.debits} accountBalance={this.state.accountBalance}
                addDebit={this.addDebit} handleInputChange={this.handleInputChange} submitDate={this.state.submitDate}
                newDescription={this.state.inputDescription} newAmount={this.state.inputAmount} />);


        return (
            <Router>
                <Switch>
                    <Route exact path="/" render={HomeComponent} />
                    <Route exact path="/userProfile" render={UserProfileComponent} />
                    <Route exact path="/credits" render={CreditsComponent} />
                    <Route exact path="/debits" render={DebitsComponent} />
                    <Route exact path="/login" render={LogInComponent} />
                </Switch>
            </Router>
        );
    }
}

export default App;