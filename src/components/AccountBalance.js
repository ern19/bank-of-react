import React, { Component } from 'react';
import {Link, Redirect} from "react-router-dom"
import axios from "axios"
class AccountBalance extends Component {
    render() {
        if (this.props.redirectToHome) {
            return <Redirect to="/" />
        }
        return (
            <div>
                Balance: ${(this.props.totalCredits - this.props.totalDebits).toFixed(2)}<br />
                <button onClick={this.props.saveSomething}>Redirect button</button>
                <Link to="/user">User Page</Link>
            </div>
        );
    }
}

export default AccountBalance;