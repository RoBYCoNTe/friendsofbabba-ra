import { get } from "lodash";
import { DateTime } from "luxon";

export const allowAll = (value) => true;

export const required = (value) => {
	return value && value !== null && value.toString().length > 0
		? true
		: "ra.validation.required";
};
export const url = (value) => {
	var pattern = new RegExp(
		"^(https?:\\/\\/)?" + // protocol
			"((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" + // domain name
			"((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
			"(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
			"(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
			"(\\#[-a-z\\d_]*)?$",
		"i"
	); // fragment locator
	return !!pattern.test(value) ? true : "ra.validation.url";
};

export const checked = (value) =>
	value === true ? true : "ra.validation.required";

export const email = (value) => {
	const re =
		// eslint-disable-next-line
		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(String(value).toLowerCase()) ? true : "ra.validation.email";
};

export const json = (value) => {
	try {
		JSON.parse(value);
		return true;
	} catch (e) {
		return "ra.validation.json";
	}
};

export const date =
	(message = "ra.validation.invalid_date") =>
	(value) =>
		value && value.length > 0 && !DateTime.fromISO(value).isValid
			? message
			: undefined;

export const isAdult =
	(message = "ra.validation.is_not_adult") =>
	(value) => {
		if (!value || value.length === 0) {
			return undefined;
		}
		const luxonDate = DateTime.fromISO(value);
		if (!luxonDate.isValid) {
			return undefined;
		}
		const today = DateTime.now();

		const years = today.diff(luxonDate, "years").years;
		return years >= 18
			? years >= 100
				? message.replace("_not_", "_too_")
				: undefined
			: message;
	};

export const validate = (record, fields, translate) =>
	fields
		.map(({ props: { name, validate } }) => ({
			name,
			valid: validate(get(record, name)),
		}))
		.filter((f) => f.valid !== true)
		.reduce(
			(errors, { name, valid }) => ({
				...errors,
				[name]: translate(valid),
			}),
			{}
		);

export const mapErrors = (errors, name, error) => {
	errors[name] = error;
	return Object.keys(errors)
		.filter((field) => errors[field] !== undefined && errors[field] !== false)
		.reduce(
			(map, key) => ({
				...map,
				[key]: errors[key],
			}),
			{}
		);
};
export const mapRemoteErrors = (errors) =>
	Object.keys(errors).reduce(
		(errorList, errorField) => ({
			...errorList,
			[errorField]: Object.keys(errors[errorField])
				.map((key) => errors[errorField][key])
				.join("\n"),
		}),
		{}
	);
export const hasErrors = (errors) =>
	errors ? Object.keys(errors).length > 0 : false;
