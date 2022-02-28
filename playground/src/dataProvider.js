import addBadgesFeature from "./addBadgesFeature";
import addUploadFeature from "./addUploadFeature";
import { cacheDataProviderProxy } from "react-admin";
import data from "./data";
import fakeRestProvider from "ra-data-fakerest";

const dataProvider = fakeRestProvider(data, true);
const badgesCapableDataProvider = addBadgesFeature(dataProvider);
const uploadCapableDataProvider = addUploadFeature(badgesCapableDataProvider);
const sometimesFailsDataProvider = new Proxy(uploadCapableDataProvider, {
  get: (target, name) => (resource, params) => {
    // set session_ended=true in localStorage to trigger an API auth error
    if (localStorage.getItem("session_ended")) {
      const error = new Error("Session ended");
      error.status = 403;
      return Promise.reject(error);
    }
    // add rejection by type or resource here for tests, e.g.
    // if (name === 'delete' && resource === 'posts') {
    //     return Promise.reject(new Error('deletion error'));
    // }
    if (resource === "posts" && params.data && params.data.title === "f00bar") {
      return Promise.reject(new Error("this title cannot be used"));
    }
    return uploadCapableDataProvider[name](resource, params);
  },
});
const delayedDataProvider = new Proxy(sometimesFailsDataProvider, {
  get: (target, name) => (resource, params) =>
    new Promise((resolve) =>
      setTimeout(
        () => resolve(sometimesFailsDataProvider[name](resource, params)),
        300
      )
    ),
});

export default cacheDataProviderProxy(delayedDataProvider);
