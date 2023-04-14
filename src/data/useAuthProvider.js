import { useMemo } from "react";
import createAuthProvider from "./createAuthProvider";

const useAuthProvider = ({ apiUrl }) => {
  const memoizedFn = useMemo(() => createAuthProvider({ apiUrl }), [apiUrl]);
  return memoizedFn;
};
export default useAuthProvider;
