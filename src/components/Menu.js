import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import myStyles from "../styles/styles";

const MenuBar = () => {
  const styles = myStyles();

  return (
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={styles.menuButton}
            color="inherit"
            aria-label="open drawer"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={styles.title} variant="h6" noWrap>
            Todo App
          </Typography>
        </Toolbar>
      </AppBar>
  );
};

export default MenuBar;
