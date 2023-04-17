// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.
/**
 * Get a Mendix object by its GUID.
 * @param {string} entity - This field is required.
 * @param {string} objectGuid - This field is required.
 * @returns {Promise.<MxObject>}
 */
async function GetObjectByGuid(entity, objectGuid) {
  // BEGIN USER CODE
  if (!entity) {
    return Promise.reject(new Error("Input parameter 'Entity' is required."));
  }
  if (!objectGuid) {
    return Promise.reject(
      new Error("Input parameter 'Object guid' is required.")
    );
  }
  return new Promise((resolve, reject) => {
    mx.data.get({
      guid: objectGuid,
      callback: (object) => {
        if (object) {
          resolve(object);
        } else {
          reject(new Error("'Object guid' not found"));
        }
      },
    });
  });
  // END USER CODE
}

export { GetObjectByGuid };
