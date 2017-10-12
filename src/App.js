import React, {Component} from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './components/Home';
import AccountBalance from "./components/AccountBalance"
import UserProfile from "./components/UserProfile"
import DebitView from  "./components/DebitView"
import axios from "axios"
class App extends Component {
  state = {
    user: {
      userName: "Bob",
      memberSince: 1950
    },
    accountBalance: 12345.34,
    
    
      redirectToHome: false,
      debits: [],
      credits: [],
      totalDebits: 0,
      totalCredits: 0,
    
  }
  saveSomething = () => {
      console.log("clicked")
      setTimeout(() => {
          this.setState({redirectToHome: true})
      }, 1500)
  }
  getDebits = () => {
      axios.get("http://localhost:4000/debits", {

      }).then((response) => {
          const debits = response.data
          
          this.setState({debits: debits})
          
          const totalDebits = this.state.debits.reduce(function(acc, debit) {
          return acc + debit.amount
      }, 0)
      this.setState({totalDebits: totalDebits})
      
      })
      
      
  }

  getCredits = () => {
      axios.get("http://localhost:4000/credits", {

      }).then((response) => {
          const credits = response.data
          
          this.setState({credits: credits})
          const totalCredits = this.state.credits.reduce(function(acc, credit) {
          return acc + credit.amount
      }, 0) 
      this.setState({totalCredits: totalCredits})
      })
    
  }

  componentWillMount() {
      this.getDebits()
      this.getCredits()
      
  }
  
  render() {
    const accountBalanceWrapper = () => {
      return (<AccountBalance 
        
        getCredits={this.getCredits}
        getDebits={this.getDebits}
        saveSomething={this.saveSomething}
        totalCredits={this.state.totalCredits}
        totalDebits={this.state.totalDebits}
        debits={this.state.debits}
        credits={this.state.credits}
        />)
    }
    const userProfileWrapper = () => {
      return (<UserProfile userName={this.state.user.userName} memberSince={this.state.user.memberSince} />)
    }
    const debitsWrapper = () => {
      return (<DebitView 
        
        getCredits={this.getCredits}
        getDebits={this.getDebits}
        saveSomething={this.saveSomething}
        totalCredits={this.state.totalCredits}
        totalDebits={this.state.totalDebits}
        debits={this.state.debits}
        credits={this.state.credits}/>)
    }
    return (
      <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/account" render={accountBalanceWrapper} />
            <Route exact path="/user" render={userProfileWrapper}/>
            <Route exact path="/account/debits" render={debitsWrapper}/>
          </Switch>
        </Router>
    );
  }
}

export default App;