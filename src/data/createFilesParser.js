import { get, set } from "lodash";

import convertFile from "./convertFile.js";

/**
 * Iterate inside every prop of data and check if contains a property
 * with one of the names of the fileFields, if the property is an array
 * the engine iterate inside the array recurisively and search for files
 * matching the fileFields.
 *
 * @param {Array} data
 * @param {Array<String>} fileFields
 * @returns
 */
const parseFiles = async (data, fileFields) => {
  for (var i = 0; i < fileFields.length; i++) {
    const field = fileFields[i];
    const value = get(data, field);

    if (value && Array.isArray(value)) {
      const files = await Promise.all(value.map((file) => convertFile(file)));
      data = set(data, field, files);
    } else if (value) {
      const file = await convertFile(value);
      data = set(data, field, file);
    }
  }
  return Promise.resolve(data);
};

const parse = async (data, fileFields) => {
  if (typeof data === "object" && data !== null) {
    for (var prop in data) {
      if (data.hasOwnProperty(prop)) {
        const isProbableFile = fileFields.indexOf(prop) !== -1;
        if (isProbableFile) {
          data = await parseFiles(data, [prop]);
        } else if (Array.isArray(data[prop])) {
          data[prop] = await Promise.all(
            data[prop].map((item) => parse(item, fileFields))
          );
        } else if (typeof data[prop] === "object") {
          data[prop] = await parse(data[prop], fileFields);
        }
      } else {
        data[prop] = await parse(data[prop], fileFields);
      }
    }
  }
  return Promise.resolve(data);
};

/**
 * Return function that will be used, before every POST/PATCH/PUT request,
 * to check if the data contains files and if so, parse them.
 *
 * This function can parse trees of data, so it can be used to parse files.
 *
 * @param {Object} data
 *  Data to parse
 * @param {Array} fileFields
 *  Array of strings with the names of the fields that contain files.
 *
 * @returns {Promise<Object>}
 *  Return input data with files parsed.
 */
const createFilesParser = () => parse;

export default createFilesParser;
