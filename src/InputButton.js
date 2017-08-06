// InputButton.js

import React, { Component } from 'react';
import {
	View,
	Text,
	TouchableHighlight
} from 'react-native';

import Style from './Style';

// export the class directly through use of 'export default' on the class definition
export default class InputButton extends Component {
	
  // Props are basically static data that we can pass to child components
	render() {
		return (
			<TouchableHighlight style={[Style.inputButton, this.props.highlight ? Style.inputButtonHighlighted : null]}
			//<TouchableHighlight style={Style.inputButton} 
			//										underlayColor="#193441" 
													onPress={this.props.onPress}>
				<Text style={Style.inputButtonText}>{this.props.value}</Text>
			</TouchableHighlight>
		)
	}

}
