import { useQueryWithStore } from "ra-core";

const useBadges = () => {
  const { loaded, data } = useQueryWithStore({
    type: "getBadges",
  });
  return loaded ? data || { data: [] } : { data: [] };
};

export default useBadges;
