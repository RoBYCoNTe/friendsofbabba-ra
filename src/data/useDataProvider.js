import { useMemo } from "react";
import createDataProvider from "./createDataProvider";

const useDataProvider = ({ apiUrl, fileFields }) => {
  const memoizedFn = useMemo(
    () => createDataProvider({ apiUrl, fileFields }),
    [apiUrl, fileFields]
  );
  return memoizedFn;
};

export default useDataProvider;
