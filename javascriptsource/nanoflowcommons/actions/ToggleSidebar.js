// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the code between BEGIN USER CODE and END USER CODE
// Other code you write will be lost the next time you deploy the project.
/**
 * Toggle the sidebar.
 * @returns {Promise.<void>}
 */
async function ToggleSidebar() {
    // BEGIN USER CODE
    mx.ui.toggleSidebar();
    // Web platform
    if (window) {
        document.dispatchEvent(new CustomEvent("toggleSidebar"));
    }
    return Promise.resolve();
    // END USER CODE
}

export { ToggleSidebar };
