import { useRecordContext, useTranslate } from 'react-admin';

const Title = ({ content, smartCount = 1, ...props }) => {
	const record = useRecordContext(props);
	const translate = useTranslate();
	const count = record?.id > 0 ? 1 : 0;
	const contents = content?.split('||||');
	const target = count > 0 ? 1 : 0;
	const message = contents?.[target] || content;
	if (record === undefined) {
		return null;
	}
	return content
		? translate(message, {
				_: message,
				count,
				smart_count: smartCount,
				...record
		  })
		: null;
};
export default Title;
