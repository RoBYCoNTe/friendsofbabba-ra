import { useEffect, useState } from "react";
import { getToken } from "../../authHeaders";

const useCrud = ({ apiUrl }) => {
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
    const token = getToken();
    if (token !== null) {
      headers.append("Authentication", `Bearer ${token}`);
    }

    fetch(`${apiUrl}/crud/load`, {
      headers,
    })
      .then((response) => response.json())
      .then(({ data }) => setData({ loaded: true, loading: false, data }));
  };

  useEffect(() => loadAll({ apiUrl }));

  return { loaded, loading, data };
};
export default useCrud;
