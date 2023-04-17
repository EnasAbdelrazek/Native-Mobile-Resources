// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import { Vibration } from 'react-native';

// This file was generated by Mendix Modeler.
/**
 * @param {Big} duration - Android only setting. The time (in milliseconds) the device should vibrate. Set to empty to use the default value 500.
 * @returns {Promise.<void>}
 */
async function Vibrate(duration) {
    // BEGIN USER CODE
    // Documentation https://facebook.github.io/react-native/docs/vibration#vibrate
    const pattern = duration ? Number(duration) : 500;
    Vibration.vibrate(pattern, false);
    return Promise.resolve();
    // END USER CODE
}

export { Vibrate };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {Big} duration - Android only setting. The time (in milliseconds) the device should vibrate. Set to empty to use the default value 500.
 * @returns {Promise.<void>}
 */
export async function Vibrate(duration) {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
