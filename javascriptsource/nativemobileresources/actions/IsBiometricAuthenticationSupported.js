// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import TouchID from 'react-native-touch-id';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @returns {Promise.<boolean>}
 */
async function IsBiometricAuthenticationSupported() {
    // BEGIN USER CODE
    // Documentation https://github.com/naoufal/react-native-touch-id
    return TouchID.isSupported()
        .then(() => true)
        .catch(() => false);
    // END USER CODE
}

export { IsBiometricAuthenticationSupported };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @returns {Promise.<boolean>}
 */
export async function IsBiometricAuthenticationSupported() {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
