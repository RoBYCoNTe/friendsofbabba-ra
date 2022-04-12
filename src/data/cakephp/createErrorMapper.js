import { get } from "lodash";
const mapFieldErrors = (field, errors) => {
  const keys = Object.keys(errors);
  const messages = keys.filter((k) => typeof errors[k] === "string");

  if (messages.length > 0) {
    return {
      [field]: messages.map((m) => errors[m]).join("\n"),
    };
  } else {
    const out = keys.reduce(
      (errorMap, key) => ({
        ...errorMap,
        ...mapFieldErrors(key, errors[key]),
      }),
      {}
    );
    return {
      [field]: out,
    };
  }
};

let cakephpErrorMapper = (errors) => {
  var fields = Object.keys(errors);
  var validationErrors = fields.reduce((errorsMap, field) => {
    return {
      ...errorsMap,
      ...mapFieldErrors(field, errors[field]),
    };
  }, {});
  return validationErrors;
};

const createErrorMapper = () => (error, notify) => {
  const errors = get(error, "body.data.errors", null);
  const message = get(error, "body.data.message", null);
  if (message) {
    notify(message, { type: "error" });
  }

  if (errors) {
    const mappedErrors = cakephpErrorMapper(errors);
    return mappedErrors;
  } else {
    return false;
  }
};

export default createErrorMapper;
