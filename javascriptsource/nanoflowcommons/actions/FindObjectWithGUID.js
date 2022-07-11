// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * @param {MxObject[]} list
 * @param {string} objectGUID
 * @returns {Promise.<MxObject>}
 */
async function FindObjectWithGUID(list, objectGUID) {
    // BEGIN USER CODE
    console.log("Found list: " + list);
    return list.find(element => element.getGuid() === objectGUID);
    // END USER CODE
}

export { FindObjectWithGUID };
