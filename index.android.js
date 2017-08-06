import React, { Component } from 'react';
import {
	Text,
	AppRegistry
} from 'react-native';

AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);

class ReactCalculator extends Component {
	
	render() {
		return (
			<Text>Hello, React!</Text>
		)
	}

}
