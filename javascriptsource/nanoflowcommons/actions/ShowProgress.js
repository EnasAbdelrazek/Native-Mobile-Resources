import { Big } from "big.js";

// This file was generated by Mendix Studio Pro.
/**
 * Shows a loading dialog.
 *
 * Returns an identifier that can be used to close the dialog.
 * @param {string} message - The text to show while loading.
 * @param {boolean} blocking - Block the user interface immediately.
 * @returns {Promise.<Big>}
 */
async function ShowProgress(message, blocking) {
    // BEGIN USER CODE
    const id = mx.ui.showProgress(message, blocking);
    if (id !== undefined) {
        return Promise.resolve(new Big(id));
    }
    return Promise.reject(new Error("Could not open the loading dialog"));
    // END USER CODE
}

export { ShowProgress };
