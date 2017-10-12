import React, { Component } from 'react';

class CreditForm extends Component {
    state = {
        creditForm: {
            description: "",
            amount: 0,
            date: ""
        }
    }
    handleChange = (event) => {
        const newCreditForm = {...this.state.creditForm}
        newCreditForm[event.target.name] = event.target.value
        this.setState({creditForm: newCreditForm})
    }
    handleSubmit = (event) => {
        event.preventDefault()
        this.props.addCreditToCreditList(this.state.creditForm)
        const emptyForm = {
          description: "",
          amount: 0,
          date: ""
        }
        this.setState({creditForm: emptyForm})
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                {/* value is equal to what we want to change in state */}
                {/* name is equal to the key we want to edit in the object  */}
                {/* onChange is the event listener that updates state with a users input */}
                <input onChange={this.handleChange} name="description" type="text" placeholder="description" value={this.state.creditForm.description}/>
                </div>
                <div>
                <input onChange={this.handleChange} name="amount" type="text" placeholder="amount" value={this.state.creditForm.amount}/>
                </div>
                <div>
                <input onChange={this.handleChange} name="date" type="text" placeholder="date" value={this.state.creditForm.date}/>
                </div>
                <div>
                <button>Add Credit</button>
                </div>
            </form>
        );
    }
}

export default CreditForm;