import { useMemo } from "react";
import createManyFormatter from "./createManyFormatter";

const useManyFormatter = () => {
  const memoizedFn = useMemo(() => createManyFormatter(), []);
  return memoizedFn;
};
export default useManyFormatter;
