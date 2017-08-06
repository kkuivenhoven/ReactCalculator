// import React and Component from the react package
import React, { Component } from 'react';
// import Text and AppRegistry from the react-native package
import {
	Text,
	AppRegistry
} from 'react-native';

// Registers ReactCalculator with the AppRegistry imported above
AppRegistry.registerComponent('ReactCalculator', () => ReactCalculator);

// definition of our ReactCalculator component
// a component is essentially a view that can contain
// subviews and sub-components
class ReactCalculator extends Component {
	
	render() {
		return (
			<Text>Hello, React!</Text>
		)
	}

}
