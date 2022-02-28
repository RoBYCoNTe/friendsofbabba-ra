const addBadgesFeature = (dataProvider) => ({
  ...dataProvider,
  getBadges: () => {
    return Promise.resolve({
      data: {
        users: {
          value: 1,
          color: "secondary",
          variant: "standard",
          show: true,
        },
      },
    });
  },
});

export default addBadgesFeature;
