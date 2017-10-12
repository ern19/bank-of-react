import React, { Component } from 'react';

class DebitForm extends Component {
    state = {
        debitForm: {
            description: "",
            amount: 0,
            date: ""
        }
    }
    handleChange = (event) => {
        const newDebitForm = {...this.state.debitForm}
        newDebitForm[event.target.name] = event.target.value
        this.setState({debitForm: newDebitForm})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addDebitToDebitList(this.state.debitForm)
        const emptyForm = {
          description: "",
          amount: 0,
          date: ""
        }
        this.setState({debitForm: emptyForm})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                {/* value is equal to what we want to change in state */}
                {/* name is equal to the key we want to edit in the object  */}
                {/* onChange is the event listener that updates state with a users input */}
                <input onChange={this.handleChange} name="description" type="text" placeholder="description" value={this.state.debitForm.description}/>
                </div>
                <div>
                <input onChange={this.handleChange} name="amount" type="text" placeholder="amount" value={this.state.debitForm.amount}/>
                </div>
                <div>
                <input onChange={this.handleChange} name="date" type="text" placeholder="date" value={this.state.debitForm.date}/>
                </div>
                <div>
                <button>Add debit</button>
                </div>
            </form>
        );
    }
}

export default DebitForm;