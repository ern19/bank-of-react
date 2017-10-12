import React, { Component } from 'react';
import AccountBalance from "./AccountBalance"
import Debit from "./Debit"

class DebitsList extends Component {
    render() {
        return (
            <div>
                {this.props.debits.map((debit, index) => {
                    return (
                        <div key={index}>
                            <Debit
                                description={debit.description}
                                amount={debit.amount}
                                date={debit.date}
                            />
                        </div>
                    )
                }) }
            </div>
        );
    }
}

export default DebitsList;