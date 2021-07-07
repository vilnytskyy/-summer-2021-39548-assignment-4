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
            accountBalance: 14568.27,
            currentUser: {
                userName: 'vilnytskyy',
                memberSince: '06/27/21'
            },
            debits: [
                {
                    id: "debit-id",
                    description: "debit-description",
                    amount: "debit-amount",
                    date: "debit-date"
                }
            ],
            credits: [
                {
                    id: "credit-id",
                    description: "credit-description",
                    amount: "credit-amount",
                    date: "credit-date"
                }
            ],
            date: new Date(),
            debitsFound: false,
            creditsFound: false
        }

        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    // Tick function, and date related funcs, based on code from https://reactjs.org/docs/state-and-lifecycle.html
    // that details how to create a Clock class with local state and lifecycle methods
    tick() {
        this.setState({
            date: new Date()
        });
    }

    addCredit = () => {

    }

    addDebit = () => {

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
        alert('Description: ' + this.state.description + '\nAmount: ' + this.state.amount + '\nDate: ' + this.state.date);
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
        this.interval = setInterval(() => this.fetchDebitData(), 60 * 1000);
        this.fetchCreditData();
        this.interval = setInterval(() => this.fetchCreditData(), 60 * 1000);
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
            <Credits creditInfo={this.state.credits} accountBalance={this.state.accountBalance} />);
        const DebitsComponent = () => (
            <Debits debitInfo={this.state.debits} accountBalance={this.state.accountBalance}
                handleSubmit={this.handleSubmit} handleInputChange={this.handleInputChange} />);


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