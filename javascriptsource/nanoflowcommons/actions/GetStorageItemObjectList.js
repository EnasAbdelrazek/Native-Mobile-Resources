// This file was generated by Mendix Studio Pro.
//
// WARNING: Only the following code will be retained when actions are regenerated:
// - the import list
// - the code between BEGIN USER CODE and END USER CODE
// - the code between BEGIN EXTRA CODE and END EXTRA CODE
// Other code you write will be lost the next time you deploy the project.
import "mx-global";
import { Big } from "big.js";
import AsyncStorage from "@react-native-community/async-storage";

// This file was generated by Mendix Studio Pro.
/*
 * Retrieve a local stored list of Mendix objects identified by a unique key. When objects are the client state it will be returned, if not they will be re-created. Note: when re-creating the local Mendix object the Mendix Object ID will never be the same.
 * @returns {Promise.<MxObject[]>}
 */
async function GetStorageItemObjectList(key, entity) {
  // BEGIN USER CODE
  if (!key) {
    return Promise.reject(new Error("Input parameter 'Key' is required"));
  }
  if (!entity) {
    return Promise.reject(new Error("Input parameter 'Entity' is required"));
  }
  return getItem(key).then((result) => {
    if (result === null) {
      return Promise.reject(new Error(`Storage item '${key}' does not exist`));
    }
    const values = JSON.parse(result);
    return Promise.all(
      values.map((value) => getOrCreateMxObject(entity, value))
    ).then((newObjects) => {
      const newValues = newObjects.map((newObject) =>
        serializeMxObject(newObject)
      );
      return setItem(key, JSON.stringify(newValues)).then(() => newObjects);
    });
  });
  function getItem(key) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.getItem(key);
    }
    if (window) {
      const value = window.localStorage.getItem(key);
      return Promise.resolve(value);
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function setItem(key, value) {
    if (navigator && navigator.product === "ReactNative") {
      return AsyncStorage.setItem(key, value);
    }
    if (window) {
      window.localStorage.setItem(key, value);
      return Promise.resolve();
    }
    return Promise.reject(new Error("No storage API available"));
  }
  function getOrCreateMxObject(entity, value) {
    return getMxObject(value.guid).then((existingObject) => {
      if (existingObject) {
        return existingObject;
      } else {
        return createMxObject(entity, value);
      }
    });
  }
  function getMxObject(guid) {
    return new Promise((resolve, reject) => {
      mx.data.get({
        guid,
        callback: (mxObject) => resolve(mxObject),
        error: (error) => reject(error),
      });
    });
  }
  function createMxObject(entity, value) {
    return new Promise((resolve, reject) => {
      mx.data.create({
        entity,
        callback: (mxObject) => {
          Object.keys(value)
            .filter((attribute) => attribute !== "guid")
            .forEach((attributeName) => {
              const attributeValue = value[attributeName];
              mxObject.set(attributeName, attributeValue);
            });
          resolve(mxObject);
        },
        error: () => reject(new Error(`Could not create '${entity}' object`)),
      });
    });
  }
  function serializeMxObject(object) {
    return object.getAttributes().reduce(
      (accumulator, attributeName) => {
        accumulator[attributeName] = object.get(attributeName);
        return accumulator;
      },
      { guid: object.getGuid() }
    );
  }
  // END USER CODE
}

export { GetStorageItemObjectList };
