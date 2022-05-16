import React, { useContext, useMemo } from "react";
import { Button } from "react-admin";
import { Link, MenuItem } from "@material-ui/core";
import { getToken } from "../../data/authHeaders";
import { CrudContext } from "../../data/cakephp/crud/CrudContext";

const ExportToXlsxButton = (
  {
    currentSort,
    filterValues,
    baseUrl,
    onClick,
    label = "ra.action.export",
    menu = false,
    resource,
    extension = "xlsx",
    sort,
  },
  ref
) => {
  const { apiUrl } = useContext(CrudContext);
  const url = useMemo(
    () =>
      baseUrl == null
        ? `${apiUrl}/crud/${resource}/export.${extension}`
        : baseUrl,
    [baseUrl, apiUrl, resource, extension]
  );
  const href = useMemo(() => {
    const filters = Object.keys(filterValues)
      .filter(
        (name) =>
          filterValues[name] !== undefined && filterValues[name] !== null
      )
      .map((name) => `${name}=${filterValues[name]}`)
      .join("&");
    const order = currentSort
      ? `&sort=${currentSort.field}&direction=${currentSort.order}`
      : `&sort=${sort?.field}&direction=${sort?.order}`;
    return `${url}?token=${getToken()}&${filters}${order}`;
  }, [filterValues, currentSort, url, sort]);
  return menu ? (
    <MenuItem ref={ref} component={Link} onClick={onClick} href={href}>
      {extension?.toUpperCase()}
    </MenuItem>
  ) : (
    <Button component={Link} href={href} label={label}></Button>
  );
};

export default React.forwardRef(ExportToXlsxButton);
