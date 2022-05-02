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
    // [theme.breakpoints.down("xs")]: {
    //   button: { display: "none" },
    //   form: {
    //     flexWrap: "wrap",
    //     paddingBottom: theme.spacing(1),
    //     width: "100%",
    //     "& .filter-field": {
    //       flexShrink: 0,
    //       flexGrow: 1,
    //       width: "100%",
    //       "& .RaFilterFormInput-spacer-56": {
    //         display: "none",
    //       },
    //     },
    //     "& .filter-field > div:last-child": {
    //       width: 0,
    //     },
    //   },
    // },
  }),
  { name: "RaFilters" }
);

export default useFiltersStyles;
