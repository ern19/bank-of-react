import React, { Component } from 'react';
import DebitsList from "./DebitsList"

class DebitView extends Component {
    render() {
        return (
            <div>
                <h1>Debits</h1>
                <DebitsList   
        getCredits={this.getCredits}
        getDebits={this.getDebits}
        saveSomething={this.saveSomething}
        totalCredits={this.props.totalCredits}
        totalDebits={this.props.totalDebits}
        debits={this.props.debits}
        credits={this.props.credits}/>
            </div>
        );
    }
}

export default DebitView;