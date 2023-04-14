import { useMemo } from "react";
import createDataFormatter from "./createDataFormatter";

const useDataFormatter = () => {
  const memoizedFn = useMemo(() => createDataFormatter(), []);
  return memoizedFn;
};

export default useDataFormatter;
