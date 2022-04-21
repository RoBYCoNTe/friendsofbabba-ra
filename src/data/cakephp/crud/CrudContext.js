import React, { createContext, useEffect, useState } from "react";
import useCrud from "./useCrud";
import { get } from "lodash";

export const CrudContext = createContext({});

export const CrudProvider = ({ children, apiUrl }) => {
  const [entities, setEntities] = useState({});
  const { loading, data } = useCrud({ apiUrl });

  const getGrid = (entity) => get(entities, `${entity}.grid`, false);
  const getForm = (entity) => get(entities, `${entity}.form`, false);

  useEffect(() => setEntities(data), [data]);

  return (
    <CrudContext.Provider value={{ loading, data, getGrid, getForm }}>
      {children}
    </CrudContext.Provider>
  );
};
