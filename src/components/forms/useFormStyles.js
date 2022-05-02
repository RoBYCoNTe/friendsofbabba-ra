import { makeStyles } from "@material-ui/core";
const useFormStyles = makeStyles((theme) => ({
  [theme.breakpoints.up("md")]: {
    main: {
      width: "70%",
      minWidth: "960px",
      margin: "1em auto",
    },
  },
  [theme.breakpoints.down("md")]: {
    main: {
      minWidth: "100%",
    },
  },
}));

export default useFormStyles;
