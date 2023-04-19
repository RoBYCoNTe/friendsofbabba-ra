import { get } from "lodash";

const mapFieldErrors = (field, errors) => {
	const keys = Object.keys(errors);
	const messages = keys.filter((k) => typeof errors[k] === "string");

	if (typeof errors === "string") {
		return {
			[field]: errors,
		};
	} else if (messages.length > 0 && isNaN(parseInt(field))) {
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

		return Object.keys(out).length > 0
			? {
					[field]: out,
			  }
			: {};
	}
};

export const cakephpErrorMapper = (errors) => {
	var fields = Object.keys(errors);
	var validationErrors = fields.reduce((errorsMap, field) => {
		return {
			...errorsMap,
			...mapFieldErrors(field, errors[field]),
		};
	}, {});
	return validationErrors;
};

const createErrorMapper = (error, notify) => {
	const errors = get(error, "body.data.errors");
	const message = get(error, "body.data.message", error?.message);
	if (message && notify) {
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
