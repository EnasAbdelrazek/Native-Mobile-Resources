// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import { saveToCameraRoll } from '@react-native-community/cameraroll';

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * @param {MxObject} picture - This field is required.
 * @returns {Promise.<string>}
 */
export async function SaveToPictureLibrary(picture) {
	// BEGIN USER CODE
    // Documentation https://facebook.github.io/react-native/docs/cameraroll#savetocameraroll
    if (!picture) {
        return Promise.reject(new Error("Input parameter 'Picture' is required"));
    }
    if (!picture.inheritsFrom("System.FileDocument")) {
        const entity = picture.getEntity();
        return Promise.reject(new Error(`Entity ${entity} does not inherit from 'System.FileDocument'`));
    }
    const guid = picture.getGuid();
    const changedDate = picture.get("changedDate");
    const url = mx.data.getDocumentUrl(guid, changedDate);
    return saveToCameraRoll(url);
	// END USER CODE
}
