// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import Sound from 'react-native-sound';

// This file was generated by Mendix Studio Pro.
// BEGIN EXTRA CODE
// END EXTRA CODE
/**
 * Info about supported audio file formats:
 * - iOS: https://developer.apple.com/library/content/documentation/MusicAudio/Conceptual/CoreAudioOverview/SupportedAudioFormatsMacOSX/SupportedAudioFormatsMacOSX.html
 * - Android: https://developer.android.com/guide/topics/media/media-formats.html
 * @param {MxObject} audioFile - This field is required. Common supported file formats are mp3, wav, m4a, mp4.
 * @returns {Promise.<void>}
 */
async function PlaySound(audioFile) {
    // BEGIN USER CODE
    // Documentation https://github.com/zmxv/react-native-sound
    if (!audioFile) {
        return Promise.reject(new Error("Input parameter 'Audio file' is required"));
    }
    if (!audioFile.inheritsFrom("System.FileDocument")) {
        const entity = audioFile.getEntity();
        return Promise.reject(new Error(`Entity ${entity} does not inherit from 'System.FileDocument'`));
    }
    const guid = audioFile.getGuid();
    const changedDate = audioFile.get("changedDate");
    const url = mx.data.getDocumentUrl(guid, changedDate);
    const audio = new Sound(url, undefined, error => {
        if (error) {
            return Promise.reject(new Error(error));
        }
        audio.play(success => {
            audio.release();
            if (success) {
                return Promise.resolve();
            }
            return Promise.reject(new Error("Playback failed due to an audio encoding error"));
        });
    });
    // END USER CODE
}

export { PlaySound };

// BEGIN EXTRA CODE
// END EXTRA CODE

/**
 * Info about supported audio file formats:
 * - iOS: https://developer.apple.com/library/content/documentation/MusicAudio/Conceptual/CoreAudioOverview/SupportedAudioFormatsMacOSX/SupportedAudioFormatsMacOSX.html
 * - Android: https://developer.android.com/guide/topics/media/media-formats.html
 * @param {MxObject} audioFile - This field is required. Common supported file formats are mp3, wav, m4a, mp4.
 * @returns {Promise.<void>}
 */
export async function PlaySound(audioFile) {
	// BEGIN USER CODE
	throw new Error("JavaScript action was not implemented");
	// END USER CODE
}
