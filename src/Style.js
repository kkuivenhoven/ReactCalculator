import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
	rootContainer: {
		flex: 1
	},

	displayContainer: {
		flex: 2,
		backgroundColor: '#193441'
	},

	inputContainer: {
		flex: 8,
		backgroundColor: '#3E606F'
	}
});

// export the Style => reason is so that it can be used by other source files that import Style.js
export default Style;
