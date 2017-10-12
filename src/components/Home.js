import React, { Component } from 'react';
import { Link } from "react-router-dom"

class Home extends Component {
  render() {
    return (
        <div>
          <img src="https://letstalkpayments.com/wp-content/uploads/2016/04/Bank.png" alt="bank"/>
          <h1>Bank of React</h1>
          <Link to="/user">User Page</Link><br />

          <Link to="/account">View balance</Link><br />

          <Link to="/account/debits">View charges</Link><br />

          <Link to="/account/credits">View credits</Link><br />
            
        </div>
    );
  }
}

export default Home;