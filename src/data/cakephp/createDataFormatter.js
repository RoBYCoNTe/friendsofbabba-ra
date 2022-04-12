// Remove unwanted _joinData props from JSON object before submission to the rest service.
const createDataFormatter = (data) =>
  Object.keys(data).reduce(
    (r, key) => ({
      ...r,
      [key]: Array.isArray(data[key])
        ? data[key].map((item) => {
            if (item._joinData === null) {
              return { id: item.id };
            }
            return item;
          })
        : data[key],
    }),
    {}
  );

export default createDataFormatter;
