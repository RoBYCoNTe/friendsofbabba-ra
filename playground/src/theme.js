import "./theme.css";

import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: "Titillium Web, sans-serif",
    fontSize: 15,
  },
});

const List = {
  root: {
    "& table td, table th": {
      whiteSpace: "nowrap",
    },
    "& .MuiToolbar-root > .MuiButtonBase-root": {
      marginLeft: theme.spacing(1),
    },
  },
  bulkActionsDisplayed: {
    "& .MuiToolbar-regular:first-child": {
      "& .MuiToolbar-root": {
        flexWrap: "wrap",
      },
    },
    [theme.breakpoints.down("sm")]: {
      "& .MuiToolbar-regular:first-child": {
        display: "flex",
        flexDirection: "column",
        flexBasis: "auto",
        height: "auto",
        "& .MuiToolbar-root": {
          background: "inherit",
          padding: 0,
          flexWrap: "wrap",
          justifyContent: "flex-start",
          paddingBottom: theme.spacing(1),
          width: "100%",
        },
        "& div:nth-child(1)": {
          paddingTop: theme.spacing(1),
          paddingBottom: theme.spacing(1),
        },
      },
    },
  },
};

const Form = {
  main: {
    width: "70%",
    minWidth: "960px",
    margin: "1em auto",
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
    },
    "& p.MuiFormHelperText-root span": {
      display: "none",
    },
  },
};

const FilterForm = {
  form: {
    flexWrap: "nowrap",
    "& .filter-field > div:last-child": {
      width: theme.spacing(1),
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      "& .filter-field, & .filter-field > .MuiFormControl-root": {
        width: "100%",
      },
    },
  },
};

const TabbedForm = {
  errorTabButton: {
    color: `${theme.palette.error.main} !important`,
  },
};

// const TopToolbar = {
//   root: {
//     [theme.breakpoints.up("md")]: {
//       width: "70%",
//       minWidth: "960px",
//       margin: "1em auto",
//     },
//   },
// };
// const FobToolbar = {
//   toolbar: {
//     paddingLeft: theme.spacing(2),
//   },
// };

export default createTheme(theme, {
  overrides: {
    RaList: List,
    RaCreate: Form,
    RaEdit: Form,
    RaFilterForm: FilterForm,
    RaTabbedForm: TabbedForm,
    // RaTopToolbar: TopToolbar,
    // FobToolbar: FobToolbar,
  },
});
