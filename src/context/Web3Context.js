import React, { Component, createContext } from 'react';
import Web3 from 'web3';

const web3 = new Web3(window.web3.currentProvider);

export const Web3Context = createContext();

class Web3ContextProvider extends Component {
	state = {
		foo: 'bar'
	};

	componentDidMount() {
	}

	render() {
		return (
			<Web3Context.Provider
				value= {{ 
					...this.state
				}}
			>
				{this.props.children}
			</Web3Context.Provider>
		);
	}
}

export default Web3ContextProvider;