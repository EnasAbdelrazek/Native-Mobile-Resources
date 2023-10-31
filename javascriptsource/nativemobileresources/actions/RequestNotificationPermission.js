import { NativeModules, Platform, PermissionsAndroid } from 'react-native';
import messaging from '@react-native-firebase/messaging';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * Notification permissions are required to send a user push messages. Calling this action displays the permission dialog to the user.
 * Returns true if permission is granted, otherwise it returns false.
 * @returns {Promise.<boolean>}
 */
async function RequestNotificationPermission() {
    // BEGIN USER CODE
    // Documentation https://rnfirebase.io/docs/v5.x.x/notifications/receiving-notifications
    if (NativeModules && !NativeModules.RNFBMessagingModule) {
        return Promise.reject(new Error("Firebase module is not available in your app"));
    }
    if (Platform.OS === "android") {
        return PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.POST_NOTIFICATIONS)
            .then(() => {
            return true;
        })
            .catch(() => {
            return false;
        });
    }
    return messaging()
        .requestPermission()
        .then(() => Platform.OS === "ios" && !messaging().isDeviceRegisteredForRemoteMessages
        ? messaging()
            .registerDeviceForRemoteMessages()
            .then(() => true)
        : true)
        .catch(() => false);
    // END USER CODE
}

export { RequestNotificationPermission };
