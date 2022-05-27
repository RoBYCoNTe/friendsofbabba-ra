import { CrudContext, Menu as FobMenu } from "friendsofbabba-ra";
import React, { useContext, useMemo } from "react";

const Menu = (props) => {
  const { data } = useContext(CrudContext);
  const badges = useMemo(
    () =>
      data
        ? Object.keys(data).reduce(
            (badges, k) =>
              data[k].badge != null
                ? { ...badges, [k]: data[k].badge }
                : badges,
            {}
          )
        : {},
    [data]
  );
  return (
    <FobMenu
      {...props}
      order={{
        dashboard: 0,
        admin: 1,
      }}
      badges={badges}
    />
  );
};

export default Menu;
