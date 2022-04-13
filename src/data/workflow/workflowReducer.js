export const REQUEST_LOAD = "REQUEST_WORKFLOW_LOAD";
export const RECEIVE_LOAD = "RECEIVE_WORKFLOW_LOAD";
const workflowReducer =
  (data) =>
  (
    previousState = {
      loading: false,
      items: data,
    },
    { type, payload }
  ) => {
    if (type === REQUEST_LOAD) {
      return {
        ...previousState,
        loading: true,
      };
    } else if (type === RECEIVE_LOAD) {
      const { data } = payload;
      return {
        ...previousState,
        loading: false,
        items: data,
      };
    }

    return previousState;
  };

export default workflowReducer;
