import { useMemo } from "react";

export function notifyToken(token) {
  var event = new Event("login");
  event.key = "token";
  event.value = token;
  document.dispatchEvent(event);
}

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
export function useToken() {
  const token = getToken();
  const headers = getHeaders();
  const headersMemo = useMemo(() => headers, [headers]);
  return { token, headers: headersMemo };
}
