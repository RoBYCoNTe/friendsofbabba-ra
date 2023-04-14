import { useTranslate } from "react-admin";

const useFieldLabel = ({ resource }) => {
  const t = useTranslate();
  return (field, translate = true) => {
    const label = `resources.${resource}.fields.${field}`;
    return translate ? t(label, { _: label }) : label;
  };
};

export default useFieldLabel;
