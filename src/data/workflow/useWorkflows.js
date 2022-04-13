import { useEffect, useState } from "react";

const useWorkflows = ({ apiUrl }) => {
  const [{ loaded, loading, data }, setData] = useState({
    loading: false,
    loaded: false,
    data: [],
  });
  const loadAll = ({ apiUrl }) => {
    if (loaded || loading) {
      return;
    }
    setData({ loading: true });
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    fetch(`${apiUrl}/workflow`, {
      headers,
    })
      .then((response) => response.json())
      .then(({ data }) => setData({ loaded: true, loading: false, data }));
  };

  useEffect(() => loadAll({ apiUrl }));

  return { loaded, loading, data };
};
export default useWorkflows;
