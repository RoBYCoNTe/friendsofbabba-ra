import { makeStyles } from "@material-ui/core";
const useFiltersStyles = makeStyles(
  (theme) => ({
    form: {
      flexWrap: "nowrap",
      "& .filter-field > div:last-child": {
        width: theme.spacing(1),
      },
    },
    [theme.breakpoints.down("md")]: {
      button: { display: "none" },
    },
  }),
  { name: "RaFilters" }
);

export default useFiltersStyles;
