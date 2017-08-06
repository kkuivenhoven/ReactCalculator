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
	
	render() {
		return (
			<View style={Style.rootContainer}>
				<View style={Style.displayContainer}></View>
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
					<InputButton value={input} key={r + "-" + i} />
				);
			}
			views.push(<View style={Style.inputRow} key={"row-" + r}>{inputRow}</View>)
		}
		return views;
	}


}


// register ReactCalculator with the AppRegistry imported above
AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);


