const addBadgesFeature = (dataProvider) => ({
  ...dataProvider,
  getBadges: () => {
    return Promise.resolve({
      data: {
        users: {
          value: Math.floor(Math.random() * 99) + 1,
          color: "error",
          variant: "standard",
          show: true,
        },
      },
    });
  },
});

export default addBadgesFeature;
