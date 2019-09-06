import React, { Component } from "react";
import { connect } from "react-redux";
import { deposit, withdraw } from "../actions/balance";

export class Wallet extends Component{
    constructor(props) {
        super(props);
        this.state = { balance: undefined, errors: "You should use only a numbers", showError: false};
    }
    updateBalance = event => this.setState({balance: parseInt(event.target.value),showError: false});

    openDeposit = () => {
        this.props.deposit(!!this.state.balance ? this.state.balance : this.setState({showError: true}))
       };

    withdrawFromDeposit = () =>  this.props.withdraw(!!this.state.balance ? this.state.balance : this.setState({showError: true}));

    render(){
        const { showError, errors } = this.state;
        return(
            <div>
                <h3 className="balance">Wallet Balance : {this.props.balance}</h3>
                <br/>
                {showError ?  <span style={{color: "red"}}>{errors}</span> : ""}
                   <br/>
                    <input className="input-wallet"   onChange={this.updateBalance}/>
                    <button className="btn-deposit" onClick={this.openDeposit}>Add to Deposit</button>
                    <button className="btn-withdraw" onClick={this.withdrawFromDeposit}>Withdraw</button>
            </div>
        )
    }
}

export default connect(state => { return {balance: state.balance} }, {deposit, withdraw})(Wallet);