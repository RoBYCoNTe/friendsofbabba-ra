import { useTranslate } from "react-admin";

const Title = ({ content, record }) => {
  const translate = useTranslate();
  const count = record?.id > 0 ? 1 : 0;
  const contents = content?.split("||||");
  const target = count > 0 ? 1 : 0;
  const message = contents?.[target] || content;
  return content ? translate(message, { _: message, count, ...record }) : null;
};
export default Title;
