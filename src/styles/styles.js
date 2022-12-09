import { makeStyles } from "@mui/styles";

export default makeStyles(() => ({
  btn: {
    backgroundColor: "#2d93e4",
    color: "#fff",
    height: 45,
    borderRadius: 2,
    width: 240,
    textTransform: "capitalize",

    "&:hover": {
      backgroundColor: "#2d93e4",
      color: "#fff",
    },
  },
}));
