const load = async ({ apiUrl, token }) => {
  let headers = new Headers();
  headers.append("Accept", "application/json");
  headers.append("Content-Type", "application/json");
  headers.append("Authorization", `Bearer ${token}`);

  return fetch(`${apiUrl}/crud/load`, {
    headers,
  })
    .then((response) => response.json())
    .then(({ data }) => data);
};
export default load;
