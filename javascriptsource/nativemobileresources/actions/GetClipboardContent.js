// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import { Clipboard } from 'react-native';

// This file was generated by Mendix Modeler.
/**
 * @returns {Promise.<string>}
 */
async function GetClipboardContent() {
    // BEGIN USER CODE
    // Documentation https://facebook.github.io/react-native/docs/clipboard#getstring
    return Clipboard.getString();
    // END USER CODE
}

export { GetClipboardContent };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<string>}
 */
export async function GetClipboardContent() {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
