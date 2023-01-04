import React, { useCallback, useEffect, useState } from "react";

import { TextField } from "@material-ui/core";
import { get } from "lodash";
import { useDataProvider } from "react-admin";

const RecordInput = ({ source, record, resource, minWidth = 300 }) => {
  const [value, setValue] = useState(get(record, source, ""));
  const [updating, setUpdating] = useState(false);
  const handleChange = useCallback((evt) => setValue(evt.target.value), []);
  const dataProvider = useDataProvider();

  const handleKeyPress = useCallback(
    (evt) => {
      if (evt.key !== "Enter") {
        return;
      }
      setUpdating(true);
      dataProvider
        .update(resource, {
          id: record.id,
          data: {
            ...record,
            [source]: value,
            _changed: source,
          },
        })
        .then(() => setUpdating(false));
    },
    [value, dataProvider, resource, record, source]
  );
  const handleBlur = useCallback(() => {
    if (get(record, source) === value) {
      return;
    }
    setUpdating(true);
    dataProvider
      .update(resource, {
        id: record.id,
        data: {
          ...record,
          [source]: value,
          _changed: source,
        },
      })
      .then(() => setUpdating(false));
  }, [value, dataProvider, resource, source, record]);
  useEffect(() => setValue(get(record, source)), [record, source]);

  return (
    <TextField
      value={value}
      disabled={updating}
      onChange={handleChange}
      onKeyPress={handleKeyPress}
      onBlur={handleBlur}
      style={{ minWidth, width: "100%" }}
      multiline
      InputProps={{ "arial-label": "naked" }}
    />
  );
};

export default RecordInput;
