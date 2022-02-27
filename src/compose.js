const compose =
  (...funcs) =>
  (Comp) => {
    return funcs.reduceRight((prev, curr) => {
      return curr(prev);
    }, Comp);
  };
export default compose;
