// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import { NativeModules } from 'react-native';
import messaging from '@react-native-firebase/messaging';

// This file was generated by Mendix Modeler.
/**
 * This generated registration token is used to identify the app instance and periodically sends data to the backend.
 * @returns {Promise.<string>}
 */
async function getPushNotificationToken() {
    // BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/messaging/reference/Messaging#getToken
    if (NativeModules && !NativeModules.RNFBMessagingModule) {
        return Promise.reject(new Error("Firebase module is not available in your app"));
    }
    return messaging().getToken();
    // END USER CODE
}

export { getPushNotificationToken };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * This gets a push notification registration token, which can be used to register this device in the push notifications module.
 * @returns {Promise.<string>}
 */
export async function GetPushNotificationToken() {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
