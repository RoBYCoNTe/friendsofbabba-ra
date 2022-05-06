import { getHeaders, notifyToken } from "./authHeaders";

const createAuthProvider = ({ apiUrl }) => ({
  login: (params) => {
    const { username, password } = params;
    const requestURL = `${apiUrl}/users/login`;
    const request = new Request(requestURL, {
      method: "POST",
      body: JSON.stringify({ username, password }),
      headers: new Headers({
        "Content-Type": "application/json",
        Accept: "application/json",
      }),
    });
    return fetch(request)
      .then((response) => response.json())
      .then(({ data, success }) => {
        if (!success) {
          throw new Error(data.message);
        }
        localStorage.setItem("token", data.token);
        localStorage.setItem("roles", JSON.stringify(data.roles));
        localStorage.setItem("profile", JSON.stringify(data.profile));
        notifyToken(data.token);
      });
  },
  logout: () => {
    localStorage.removeItem("token");
    localStorage.removeItem("roles");
    localStorage.removeItem("profile");
    return Promise.resolve();
  },
  checkAuth: () =>
    localStorage.getItem("token") ? Promise.resolve() : Promise.reject(),
  checkError: (error) => {
    if (error.status === 401 || error.status === 500) {
      return Promise.reject();
    }
    return Promise.resolve();
  },
  getPermissions: () => {
    let roles = JSON.parse(localStorage.getItem("roles"));
    return Promise.resolve(
      (v) => roles && roles.some((r) => v.includes(r.code))
    );
  },

  getIdentity: () => {
    const profile = JSON.parse(localStorage.getItem("profile"));
    const roles = JSON.parse(localStorage.getItem("roles"));
    return Promise.resolve({
      ...profile,
      roles,
    });
  },

  impersonate: (id) => {
    const requestURL = `${apiUrl}/users/impersonate/?id=${id}`;
    const request = new Request(requestURL, {
      method: "POST",
      headers: getHeaders(),
    });
    return fetch(request)
      .then((response) => response.json())
      .then(({ success, data }) => {
        if (!success) {
          throw new Error(data.message);
        }
        ["token", "roles", "username", "profile"].forEach((param) => {
          const toSaveParam = `admin_${param}`;
          localStorage.setItem(toSaveParam, localStorage.getItem(param));
          localStorage.setItem(
            param,
            ["profile", "roles"].indexOf(param) !== -1
              ? JSON.stringify(data[param])
              : data[param]
          );
        });
        localStorage.setItem("impersonate", true);
      });
  },
  stopImpersonate() {
    ["token", "roles", "username", "profile"].forEach((param) => {
      const savedParam = `admin_${param}`;
      localStorage.setItem(param, localStorage.getItem(savedParam));
      localStorage.removeItem(savedParam);
    });
    localStorage.setItem("impersonate", false);
    return Promise.resolve();
  },
});

export default createAuthProvider;
