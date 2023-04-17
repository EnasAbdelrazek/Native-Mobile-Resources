// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.
/**
 * Hides a loading dialog.
 * @param {Big} identifier - This field is required.
 * @returns {Promise.<void>}
 */
async function HideProgress(identifier) {
  // BEGIN USER CODE
  if (identifier == null) {
    return Promise.reject(
      new Error("Input parameter 'Identifier' is required")
    );
  }
  mx.ui.hideProgress(Number(identifier));
  return Promise.resolve();
  // END USER CODE
}

export { HideProgress };
