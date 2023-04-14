// input -> record
const createManyParser = () => (many) => {
  let objects = many ? many.map((id) => ({ id })) : [];
  return objects;
};

export default createManyParser;
