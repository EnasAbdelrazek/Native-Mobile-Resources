// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import { fetch } from '@react-native-community/netinfo';

// This file was generated by Mendix Modeler.
/**
 * @returns {Promise.<boolean>}
 */
async function IsWifiConnection() {
    // BEGIN USER CODE
    return fetch().then((info) => info.type === "wifi");
    // END USER CODE
}

export { IsWifiConnection };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<boolean>}
 */
export async function IsWifiConnection() {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
