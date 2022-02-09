// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import { Platform, NativeModules } from 'react-native';
import PushNotification from 'react-native-push-notification';

// This file was generated by Mendix Modeler.
/**
 * @param {string} notificationId - This field is required.
 * @returns {Promise.<void>}
 */
async function CancelScheduledNotification(notificationId) {
    // BEGIN USER CODE
    // Documentation https://github.com/zo0r/react-native-push-notification
    const isIOS = Platform.OS === "ios";
    if (NativeModules &&
        ((isIOS && !NativeModules.RNCPushNotificationIOS) || (!isIOS && !NativeModules.RNPushNotification))) {
        return Promise.reject(new Error("Notifications module is not available in your app"));
    }
    if (!notificationId) {
        return Promise.reject(new Error("Input parameter 'Notification id' is required"));
    }
    PushNotification.cancelLocalNotifications({ id: notificationId });
    return Promise.resolve();
    // END USER CODE
}

export { CancelScheduledNotification };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {string} notificationId - This field is required.
 * @returns {Promise.<void>}
 */
export async function CancelScheduledNotification(notificationId) {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
