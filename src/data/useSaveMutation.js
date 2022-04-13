import { useMutation, useNotify, useRedirect, useRefresh } from "ra-core";
import { useCallback } from "react";

import createErrorMapper from "./cakephp/createErrorMapper";

const useSaveMutation = ({
  basePath,
  errorMapper = createErrorMapper(),
  onSuccess = undefined,
  redir = null,
  redirect,
  refresh,
  resource,
  transform = undefined,
  type = null,
}) => {
  const [mutate] = useMutation();
  const doRedirect = useRedirect();
  const doRefresh = useRefresh();
  const notify = useNotify();
  const save = useCallback(
    async (values) => {
      let response;
      try {
        response = await mutate(
          {
            type:
              type === null
                ? values.id && values.id > 0
                  ? "update"
                  : "create"
                : type,
            resource,
            payload: {
              id: values.id,
              data: transform ? transform(values) : values,
            },
          },
          { returnPromise: true }
        );
      } catch (error) {
        return errorMapper(error, notify);
      }

      if (!onSuccess) {
        console.info({
          redir,
          refresh,
          redirect,
          basePath,
        });
        if (redir) {
          redirect(redir);
        } else if (refresh === true) {
          if (values.id > 0) {
            doRefresh();
          } else {
            doRedirect("edit", basePath, response.data.id);
          }
        } else {
          doRedirect(redirect, basePath, response.data.id);
        }
        notify("ra.notification." + (values.id > 0 ? "updated" : "created"), {
          type: "info",
          messageArgs: {
            smart_count: 1,
          },
        });
      } else onSuccess(response, values);
    },
    [
      basePath,
      doRedirect,
      doRefresh,
      errorMapper,
      mutate,
      notify,
      onSuccess,
      redir,
      redirect,
      refresh,
      resource,
      transform,
      type,
    ]
  );
  return save;
};

export default useSaveMutation;
