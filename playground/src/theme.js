import { createTheme } from "@material-ui/core/styles";

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)");
const theme = createTheme({
  palette: {
    type: prefersDarkMode.matches ? "dark" : "light",
  },
  props: {
    MuiButton: {
      disableElevation: true,
    },
  },
  typography: {
    fontFamily: "Be Vietnam Pro",
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
    maxWidth: "1024px",
    margin: "1em auto",
    [theme.breakpoints.down("md")]: {
      minWidth: "100%",
    },
    "& p.MuiFormHelperText-root span": {
      display: "none",
    },
    "& .MuiButtonBase-root.MuiTab-root": {
      maxWidth: 150,
      fontSize: 14,
    },
  },
};

const Toolbar = {
  toolbar: {
    zIndex: 1000,
    "& .MuiButtonBase-root.MuiButton-root > span": {
      [theme.breakpoints.down("xs")]: {
        maxWidth: 100,
        textOverflow: "ellipsis",
        lineClamp: 1,
        WebkitLineClamp: 1,
        overflow: "hidden",
        display: "-webkit-box",
        WebkitBoxOrient: "vertical",
        whiteSpace: "break-spaces",
      },
    },
  },
};

const FilterForm = {
  form: {
    flexWrap: "nowrap",
    "& .filter-field > div:last-child": {
      width: theme.spacing(1),
    },
    "& .filter-field .MuiAutocomplete-root": {
      marginBottom: theme.spacing(0.7),
      minWidth: 250,
    },
    [theme.breakpoints.down("sm")]: {
      display: "block",
      "& .filter-field, & .filter-field > .MuiFormControl-root": {
        width: "100%",
      },
    },
  },
};

const RaAutocompleteSuggestionItem = {
  suggestionText: {
    fontWeight: "bold",
  },
};
const TabbedForm = {
  errorTabButton: {
    color: `${theme.palette.error.main} !important`,
  },
};

export default createTheme(theme, {
  overrides: {
    RaList: List,
    RaCreate: Form,
    RaEdit: Form,
    RaFilterForm: FilterForm,
    RaTabbedForm: TabbedForm,
    FobToolbar: Toolbar,
    RaAutocompleteSuggestionItem,
  },
});
