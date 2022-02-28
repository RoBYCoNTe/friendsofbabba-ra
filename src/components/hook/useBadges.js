import { useEffect, useState } from "react";

import { useDataProvider } from "ra-core";

const useBadges = (badges) => {
  const dataProvider = useDataProvider();
  const [badgesData, setBadgesData] = useState({});
  useEffect(() => {
    if (typeof badges === "string") {
      dataProvider[badges]().then(({ data }) => setBadgesData(data));
    } else {
      setBadgesData(badges);
    }
  }, [badges, dataProvider]);
  return badgesData;
};

export default useBadges;
