import { useMutation, useNotify, useRedirect, useRefresh } from "ra-core";
import { useCallback } from "react";

import createErrorMapper from "./cakephp/createErrorMapper";

const useSaveMutation = ({
  type = null,
  resource,
  transform = undefined,
  onSuccess = undefined,
  errorMapper = createErrorMapper(),
  ...props
}) => {
  const [mutate] = useMutation();
  const redirect = useRedirect();
  const refresh = useRefresh();
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
        if (props.refresh === true) {
          if (values.id > 0) {
            refresh();
          } else {
            redirect("edit", props.basePath, response.data.id);
          }
        } else {
          if (props.redirect !== undefined) {
            redirect(props.redirect);
          } else {
            redirect("list", props.basePath);
          }
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
      mutate,
      type,
      resource,
      props.redirect,
      props.refresh,
      redirect,
      refresh,
      notify,
      props.basePath,
      onSuccess,
      transform,
      errorMapper,
    ]
  );
  return save;
};

export default useSaveMutation;
