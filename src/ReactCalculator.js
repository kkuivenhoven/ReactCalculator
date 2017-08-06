// src/ReactCalculator.js
import Style from './Style';

// import React and Component from the react package
import React, { Component } from 'react';
// import Text and AppRegistry from the react-native package
import {
	View,
	Text,
	AppRegistry
} from 'react-native';
import InputButton from './InputButton';

// define input buttons that'll be displayed in the calculator
const inputButtons = [
	[1, 2, 3, '/'],
	[4, 5, 6, '*'],
	[7, 8, 9, '-'],
	[0, '.', '=', '+']
];

// ReactCalculator component definition
// a component is basically a view that can contain
// subviews and sub-components
class ReactCalculator extends Component {

	// constructor initializes the input number to 0
	// takes a single props arg & passes it up the super constructor
	// during the constructor is only time in which you can modify state directly
	// after which it must be deemed immutable & can only be modified
	// using setState
	constructor(props) {
		super(props);
		this.state = {
			previousInputValue: 0,
			inputValue: 0,
			selectedSymbol: null
		}
	}
	
	render() {
		return (
			<View style={Style.rootContainer}>
				<View style={Style.displayContainer}>
					<Text style={Style.displayText}>{this.state.inputValue}</Text>
				</View>
				<View style={Style.inputContainer}>
					{this._renderInputButtons()}
				</View>
			</View>
		)
	}


	/* for each row in 'inputButtons', create a row View and 
	add create an InputButton for each input in the row */
  // the key on the Components is required when creating array of Components a
  // each key must be unique to each Component in the array
	_renderInputButtons() {
		let views = [];
		for(var r=0; r < inputButtons.length; r++) {
			let row = inputButtons[r];
			let inputRow = [];
			for(var i=0; i < row.length; i++) {
				let input = row[i];
				inputRow.push(
					//<InputButton value={input} key={r + "-" + i} />
					//highlight property set to true when selectedSymbol value matches 
					//the value of the InputButton
					<InputButton value={input} 
											 highlight={this.state.selectedSymbol === input}
										   onPress={this._onInputButtonPressed.bind(this, input)}
											 key={r + "-" + i}/>
				);
			}

			views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
		}
		return views;
		
	}

  // in the onPress, we bind the function _onInputButtonPressed with a 
  // reference to the input value -> this will allow us to know what action
  // to take based on which InputButton was clicked
  _onInputButtonPressed(input){
    switch (typeof input) {
			case 'number':
				return this._handleNumberInput(input)
			case 'string':
				return this._handleStringInput(input)
		}
  }

	
	_handleNumberInput(num){
		let inputValue = (this.state.inputValue * 10) + num;

		this.setState({
			inputValue: inputValue
		})
	}


	// responsible for updating the selectedSymbol, clearing the inputValue
	// and assigning it to the previousInputValue
	_handleStringInput(str){
		switch(str){
			case '/':
			case '*':
			case '+':
			case '-':
				this.setState({
					selectedSymbol: str,
					previousInputValue: this.state.inputValue,
					inputValue: 0
				});
				break;
			case '=':
				let symbol = this.state.selectedSymbol,
						inputValue = this.state.inputValue,
						previousInputValue = this.state.previousInputValue;

				// ensures a selectedSymbol is set
				if(!symbol){
					return;
				}
		
				// if there is a selectedSymbol, we clear previousInputValue and 
				// selectedSymbol values and set inputValue equal to the result
				// of the selected math operation; thus the UI is updated 
				// with the result of the equation & allows the user to
				// continue performing calculations on the results
				this.setState({
					previousInputValue: 0,
					inputValue: eval(previousInputValue + symbol + inputValue),
					selectedSymbol: null
				});
				break;	
		}
	}


}


// register ReactCalculator with the AppRegistry imported above
AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);


