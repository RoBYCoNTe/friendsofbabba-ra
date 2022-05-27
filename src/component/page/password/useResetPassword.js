import { useCallback } from "react";
import { useDataProvider } from "ra-core";

const useResetPassword = () => {
  const dataProvider = useDataProvider();
  const handler = useCallback(
    ({ account, token }) =>
      dataProvider.post("users/reset-password", { account, token }),
    [dataProvider]
  );
  return handler;
};

export default useResetPassword;
