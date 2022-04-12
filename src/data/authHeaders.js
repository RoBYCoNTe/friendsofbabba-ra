export function getHeaders() {
  const token = localStorage.getItem("token");
  const headers = new Headers({
    "Content-Type": "application/json",
    Accept: "application/json",
    Authorization: `Bearer ${token}`,
  });
  return headers;
}

export function getToken() {
  return localStorage.getItem("token");
}
