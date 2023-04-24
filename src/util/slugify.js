const slugify = (str) =>
	str
		.toString() // Cast to string
		.toLowerCase() // Convert the string to lowercase letters
		.trim() // Remove whitespace from both sides of a string
		.replace(/\s+/g, '-') // Replace spaces with -
		.replace(/&/g, '-y-') // Replace & with 'and'
		// eslint-disable-next-line no-useless-escape
		.replace(/[^\w\-]+/g, '') // Remove all non-word chars
		// eslint-disable-next-line no-useless-escape
		.replace(/\-\-+/g, '-'); // Replace multiple - with single -

export default slugify;
