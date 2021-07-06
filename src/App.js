import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
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
                memberSince: '08/22/18'
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
            ]
        }
    }

    addCredit = () => {

    }

    addDebit = () => {
        
    }

    componentDidMount() {

    }

    mockLogIn = (logInInfo) => {
        const newUser = { ...this.state.currentUser }
        newUser.userName = logInInfo.userName
        this.setState({ currentUser: newUser })
    }

    render() {
        const HomeComponent = () => (<Home accountBalance={this.state.accountBalance} />);
        const UserProfileComponent = () => (
            <UserProfile userName={this.state.currentUser.userName} memberSince={this.state.currentUser.memberSince} />
        );
        const LogInComponent = () => (<LogIn user={this.state.currentUser} mockLogIn={this.mockLogIn} />);
        const CreditsComponent = () => (<Credits />);
        const DebitsComponent = () => (<Debits debitInfo={this.state.debits}/>);

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