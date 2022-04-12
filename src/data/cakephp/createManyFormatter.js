const createManyFormatter = () => (many) => {
  let array = many ? many.map((p) => p.id) : [];
  return array;
};
export default createManyFormatter;
