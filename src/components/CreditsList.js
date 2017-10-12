import React, { Component } from 'react';
import AccountBalance from "./AccountBalance"
import Credit from "./Credit"

class CreditsList extends Component {
    render() {
        return (
            <div>
                {this.props.credits.map((credit, index) => {
                    return (
                        <div key={index}>
                            <Credit
                                description={credit.description}
                                amount={credit.amount}
                                date={credit.date}
                            />
                        </div>
                    )
                }) }
            </div>
        );
    }
}

export default CreditsList;