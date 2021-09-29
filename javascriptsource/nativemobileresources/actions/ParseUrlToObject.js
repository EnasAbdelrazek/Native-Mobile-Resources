// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import { Big } from "big.js";
import UrlParse from 'url-parse';

// BEGIN EXTRA CODE
async function createParamObject(entity, url) {
    const data = splitUrlToObject(url);
    const mxObject = await createMxObject(entity);
    mxObject.getAttributes().forEach(attributeName => {
        const value = data[attributeName.toLocaleLowerCase()];
        if (value) {
            mxObject.set(attributeName, value);
        }
    });
    return mxObject;
}
function splitUrlToObject(url) {
    const urlObject = new UrlParse(url);
    const parsedUrlObject = new UrlParse(url, true);
    const queryValues = {};
    const query = parsedUrlObject.query;
    for (const [key, value] of Object.entries(query)) {
        queryValues[key.toLowerCase()] = value !== undefined ? value : "";
    }
    const paths = urlObject.pathname
        .replace(/^\/*/, "")
        .split("/")
        .reduce((acc, currentValue, index) => {
        acc["path" + index] = currentValue;
        return acc;
    }, {});
    const hash = url.split("#")[1] || "";
    return {
        ...urlObject,
        hash,
        ...paths,
        ...queryValues
    };
}
function createMxObject(entity) {
    return new Promise((resolve, reject) => {
        mx.data.create({
            entity,
            callback: resolve,
            error: () => reject(new Error(`Could not create '${entity}' object to ParseUrlToObject`))
        });
    });
}
// END EXTRA CODE

/**
 * This JavaScript action will create a new object and set all available attributes with their values. 
 * For example the URL: https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top
 * 
 * - URL attributes:
 * protocol: "https:"
 * hash: "top"
 * query: "?tag=networking&order=newest"
 * pathname: "/forum/questions/"
 * auth: "john.doe"
 * host: "www.example.com:123"
 * port: "123"
 * hostname: "www.example.com"
 * password: "secret"
 * username: "john.doe"
 * origin: "https://www.example.com:123"
 * href: "https://john.doe:secret@www.example.com:123/forum/questions/?tag=networking&order=newest#top"
 * 
 * - Dynamically based on the number of slashes in the paths:
 * path0: "forum"
 * path1: "questions"
 * 
 * - Dynamically based on the number of query keys:
 * tag: "networking"
 * order: "newest"
 * @param {string} uRL
 * @param {string} entity
 * @returns {Promise.<MxObject>}
 */
export async function ParseUrlToObject(uRL, entity) {
	// BEGIN USER CODE
    return createParamObject(entity, uRL);
	// END USER CODE
}
