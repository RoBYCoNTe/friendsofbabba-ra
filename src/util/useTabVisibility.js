import { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";

const useTabVisibiliy = (tab) => {
  const { pathname } = useLocation();
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const args = pathname.split("/");
    if ((tab === 0 && args.length === 3) || pathname.endsWith(`/${tab}`)) {
      setVisible(true);
    }
  }, [pathname, tab]);
  return visible;
};
export default useTabVisibiliy;
