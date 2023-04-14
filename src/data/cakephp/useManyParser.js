import { useMemo } from "react";
import createManyParser from "./createManyParser";

const useManyParser = () => {
  const memoizedFn = useMemo(() => createManyParser(), []);
  return memoizedFn;
};

export default useManyParser;
