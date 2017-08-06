// InputButton.js

import React, { Component } from 'react';
import {
	View,
	Text
} from 'react-native';

import Style from './Style';

// export the class directly through use of 'export default' on the class definition
export default class InputButton extends Component {
	
  // Props are basically static data that we can pass to child components
	render() {
		return (
			<View style={Style.inputButton}>
				<Text style={Style.inputButtonText}>{this.props.value}</Text>
			</View>
		)
	}

}
