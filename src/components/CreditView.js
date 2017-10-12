import React, { Component } from 'react';
import CreditsList from "./CreditsList"
import AccountBalance from "./AccountBalance"

class CreditView extends Component {
    render() {
        return (
            <div>
                <h1>Credits</h1>
                <CreditsList   
        getCredits={this.getCredits}
        getDebits={this.getDebits}
        saveSomething={this.saveSomething}
        totalCredits={this.props.totalCredits}
        totalDebits={this.props.totalDebits}
        debits={this.props.debits}
        credits={this.props.credits}/>
        Balance: ${(this.props.totalCredits - this.props.totalDebits).toFixed(2)}
            </div>
        );
    }
}

export default CreditView;