import React from 'react';
import { Header } from '../organism/Header';

import PropTypes from 'prop-types';
import { FormContainer } from '../molecules/FormContainer';





export const Home = HomeWrapper => {
    return class extends React.Component {
            state = {
                value: '',
                accountInput: "",
                dataKey: null,
                title: "",
                account: "",
                balance: null,
                ether: ""
            }
            getBalance = (contract) => {
                const { accounts } = this.props.drizzleState;
                const acc = this.get(accounts)
                contract.web3.eth
                .getBalance(acc)
                .then((res) => {
                    let str = ""
                    const bal = res
                    str += bal
                    const balance = contract.web3.utils.fromWei(str, "ether")
                    this.setState({ balance })
                })
            }




            sendEther = () => {
                const contract = this.props.drizzle.contracts.DMCToken;
                const { accounts } = this.props.drizzleState;
                const account = this.get(accounts)
                contract.web3.eth.sendTransaction({
                from: account,
                to: this.state.accountInput,
                value: this.state.value
            })
                    .then((receipt) => {
                        console.log(receipt)
                        if (receipt) {
                            alert("Transation Sent 👍")
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
            }

            clear = () => this.setState({ value: "", accountInput: "" })

            getAccounts = () => {
                const { accounts } = this.props.drizzleState;
                const account = this.get(accounts)
                this.setState({ account })
            }



            get = (accounts) => {
                let account;
                for (let key in accounts) {
                    account += accounts[key];
                    account =  String(account).slice(9)
                }
                return account
            }




        async componentDidMount() {
                const contract = this.props.drizzle.contracts.DMCToken;
                const title = contract.contractName;

                this.getBalance(contract)
                this.getAccounts()
            

                this.setState({ title });
            }

            componentWillUnmount() {
                this.getBalance(null)
                this.getAccounts(null)
                this.setState({
                    value: '',
                    accountInput: "",
                    dataKey: null,
                    title: "",
                    account: "",
                    balance: null
                })
            }


    handleChange = e => {
        const contract = this.props.drizzle.contracts.DMCToken;
        let value = e.target.value;
        value = contract.web3.utils.toWei(value, "ether");
        if (value > 9000000000000000000) {
            value = ""
        }
        this.setState({ value });
    };

    handle = e => {
        this.setState({ accountInput: e.target.value });
    }


        render() {
            const { account, title } = this.state;
            return (
                <Header account={account}  title={title} { ...this.state } >
                    <HomeWrapper 
                    drizzle={this.props.drizzle} 
                   drizzleState={this.props.drizzleState} { ...this.state }
                   handleChange={this.handleChange}
                   handle={this.handle}
                   sendEther={this.sendEther}
                   clear={this.clear}
                   />
                </Header>
            )
        }
    }
}






Home.propTypes = {
    drizzle: PropTypes.object
}


export default Home(FormContainer)