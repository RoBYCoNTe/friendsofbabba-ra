import createDataProvider from "./createDataProvider";
import createFilesParser from "./createFilesParser";
import { useMemo } from "react";

/**
 * Create and return a data provider.
 *
 * @param {Object} props
 * @param {String} props.apiUrl
 * @param {Array} props.fileFields
 * @param {Function} props.filesParser Function that parse files inside data.
 * @returns
 */
const useDataProvider = ({
  apiUrl,
  fileFields,
  filesParser = createFilesParser(),
}) => {
  const memoizedFn = useMemo(
    () => createDataProvider({ apiUrl, fileFields, filesParser }),
    [apiUrl, fileFields]
  );
  return memoizedFn;
};

export default useDataProvider;
