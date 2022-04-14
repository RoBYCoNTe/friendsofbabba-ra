import { useState, useEffect } from "react";

const useI18nLanguages = ({ apiUrl }) => {
  const [data, setData] = useState({ loading: true, languages: null });
  useEffect(() => {
    let headers = new Headers();
    headers.append("Accept", "application/json");
    headers.append("Content-Type", "application/json");
    fetch(`${apiUrl}/languages/load`, { headers })
      .then((response) => response.json())
      .then(({ data }) => setData({ loading: false, data }));
  }, [apiUrl]);

  return data;
};

export default useI18nLanguages;
