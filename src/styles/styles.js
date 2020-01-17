import { makeStyles, fade } from "@material-ui/core/styles";

const myStyles = makeStyles(theme => ({
  flex: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center"
  },
  margin: {
    margin: theme.spacing(1)
  },
  magint10: {
    marginTop: "10px"
  },
  textField: {
    display: "flex",
    flexWrap: "wrap",
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  marginSuffix: {
    marginRight: "5px"
  },
  marginPrefix: {
    marginLeft: "5px"
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block"
    }
  },
  search: {
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto"
    }
  },
  searchIcon: {
    width: theme.spacing(7),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  inputRoot: {
    color: "inherit"
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: 120,
      "&:focus": {
        width: 200
      }
    }
  },
  mainButtonSpacing: {
    [theme.breakpoints.down("xs")]: {
      padding: "4px"
    }
  },
  width80: {
    width: "80%",
    [theme.breakpoints.down("xs")]: {
      width: "100%"
    }
  },
  width100: {
    width: "100%"
  },

  add: { color: "green" },
  edit: { color: "deepskyblue" },
  cancel: { color: "crimson" },
  delete: { color: "firebrick" },
  submit: { color: "green" },
  complete: {textDecoration: ""}
}));

export default myStyles;
