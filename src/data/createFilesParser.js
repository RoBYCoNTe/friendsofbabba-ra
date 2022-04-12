import { get, set } from "lodash";
import convertFile from "./convertFile";
const createFilesParser = () => async (data, fileFields) => {
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

export default createFilesParser;
