import { makeStyles } from "@material-ui/core/styles";
const useListStyles = makeStyles(
  (theme) => ({
    [theme.breakpoints.up("lg")]: {
      main: {
        "& table td, table th": {
          whiteSpace: "nowrap",
        },
      },
    },
    [theme.breakpoints.down("md")]: {
      //   main: {
      //     background: theme.palette.background.default,
      //     marginTop: theme.spacing(2),
      //     display: "block",
      //   },
      //   content: {
      //     boxShadow: "none",
      //   },
      //   root: {
      //     padding: theme.spacing(2),
      //   },
    },
    [theme.breakpoints.down("sm")]: {
      bulkActionsDisplayed: {
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
    bulkActionsDisplayed: {
      "& .MuiToolbar-regular:first-child": {
        "& .MuiToolbar-root": {
          flexWrap: "wrap",
        },
      },
    },
  }),
  { name: "RaMobileList" }
);

export default useListStyles;
