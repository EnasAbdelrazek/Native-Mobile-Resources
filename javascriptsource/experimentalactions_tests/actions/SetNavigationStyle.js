// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.

/**
 * @returns {boolean}
 */
function SetNavigationStyle() {
	// BEGIN USER CODE
	const { Navigation } = require("react-native-navigation");
	console.error(Navigation.store.propsById);
	Navigation.mergeOptions(window.currentForm, {
		bottomTabs: {
			visible: false,
			animate: true
		}
	});
	// END USER CODE
}