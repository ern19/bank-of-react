import React, { Component } from 'react';
import DebitsList from "./DebitsList"
import AccountBalance from "./AccountBalance"
import DebitForm from "./DebitForm"
class DebitView extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                <DebitForm addDebitToDebitList={this.props.addDebitToDebitList}/>
                <DebitsList   
        getCredits={this.getCredits}
        getDebits={this.getDebits}
        saveSomething={this.saveSomething}
        totalCredits={this.props.totalCredits}
        totalDebits={this.props.totalDebits}
        debits={this.props.debits}
        credits={this.props.credits}
        addDebitToDebitList={this.props.addDebitToDebitList}/>
        Balance: ${(this.props.totalCredits - this.props.totalDebits).toFixed(2)}
            </div>
        );
    }
}

export default DebitView;