// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import { Platform, NativeModules } from 'react-native';
import PushNotification from 'react-native-push-notification';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * Displays the specified notification at a future moment in time.
 *
 * Note: It is not possible to display a notification whilst the app is in the foreground on iOS 9.
 * @param {Date} date - This field is required.
 * @param {string} body - This field is required.
 * @param {string} title
 * @param {string} subtitle
 * @param {boolean} playSound
 * @param {string} notificationId - This ID can be used to cancel the scheduled notification later.
 * @param {string} actionName
 * @param {string} actionGuid
 * @returns {Promise.<void>}
 */
async function ScheduleNotification(date, body, title, subtitle, playSound, notificationId, actionName, actionGuid) {
    // BEGIN USER CODE
    // Documentation https://github.com/zo0r/react-native-push-notification
    const isIOS = Platform.OS === "ios";
    if (NativeModules && isIOS && !NativeModules.RNCPushNotificationIOS) {
        return Promise.reject(new Error("Notifications module is not available in your app"));
    }
    if (!body) {
        return Promise.reject(new Error("Input parameter 'Body' is required"));
    }
    const notification = { message: body };
    const notificationIdNumber = Number(notificationId);
    if (!isIOS) {
        const channelId = "mendix-local-notifications";
        const channelExists = await new Promise(resolve => PushNotification.channelExists(channelId, (exists) => resolve(exists)));
        if (!channelExists) {
            const channel = await new Promise(resolve => PushNotification.createChannel({
                channelId,
                channelName: "Local notifications"
            }, created => resolve(created)));
            if (!channel) {
                return Promise.reject(new Error("Could not create the local notifications channel"));
            }
        }
        notification.channelId = channelId;
    }
    if (notificationIdNumber) {
        notification.id = notificationIdNumber;
    }
    if (title) {
        notification.title = title;
    }
    if (subtitle && !isIOS) {
        notification.subText = subtitle;
    }
    notification.playSound = !!playSound;
    if (actionName || actionGuid) {
        notification.userInfo = {
            actionName,
            guid: actionGuid
        };
    }
    if (date && date.getTime()) {
        notification.date = date;
    }
    PushNotification.localNotificationSchedule(notification);
    return Promise.resolve();
    // END USER CODE
}

export { ScheduleNotification };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Displays the specified notification at a future moment in time.
 * 
 * Note: It is not possible to display a notification whilst the app is in the foreground on iOS 9.
 * @param {Date} date - This field is required.
 * @param {string} body - This field is required.
 * @param {string} title
 * @param {string} subtitle
 * @param {boolean} playSound
 * @param {string} notificationId - This ID can be used to cancel the scheduled notification later.
 * @param {string} actionName
 * @param {string} actionGuid
 * @returns {Promise.<void>}
 */
export async function ScheduleNotification(date, body, title, subtitle, playSound, notificationId, actionName, actionGuid) {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
