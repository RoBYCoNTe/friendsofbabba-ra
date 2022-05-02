import { downloadCSV } from "react-admin";
import { get } from "lodash";
import jsonExport from "jsonexport/dist";

const exporter = (grid, data, translate) => {
  const columns = (grid?.columns || []).filter((c) => c.exportable === true);
  const headers = columns.map((c) => get(c, "label", c.source));
  const csvData = data.map((record) => {
    let row = {};
    columns.forEach((column) => {
      const value = get(record, column.source);
      row[column.label] = value;
    });
    return row;
  });
  jsonExport(
    csvData,
    {
      rowDelimiter: ";",
      headers,
    },
    (err, csv) => downloadCSV("\uFEFF" + csv, translate(grid?.title))
  );
};

export default exporter;
