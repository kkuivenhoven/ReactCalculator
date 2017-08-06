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

// ReactCalculator component definition
// a component is basically a view that can contain
// subviews and sub-components
class ReactCalculator extends Component {
	
	render() {
		return (
			<View style={Style.rootContainer}>
				<View style={Style.displayContainer}></View>
				<View style={Style.inputContainer}></View>
			</View>
		)
	}

}

// register ReactCalculator with the AppRegistry imported above
AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);


