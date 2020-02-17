import * as React from "react";
import { Theme, AppBar, Toolbar, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import HideOnScroll from "../HideOnScroll";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    flexGrow: 1,
    maxHeight: "100%"
  },
  titleContainer: {
    position: "relative",
    textAlign: "center",
    marginRight: theme.spacing(2),
    marginLeft: theme.spacing(2)
  },
  title: {
    color: theme.palette.text.primary,
    lineHeight: `${theme.spacing(4)}px`,
    cursor: "pointer",
    outline: "none",
    "&:after": {
      background: theme.palette.secondary.main,
      bottom: 0,
      content: '""',
      height: "2px",
      left: "50%",
      position: "absolute",
      transition: "width 0.3s ease 0s, left 0.3s ease 0s",
      width: 0
    },
    "&:hover:after": {
      width: "100%",
      left: 0
    },
    "&:focus:after": {
      left: "50%",
      width: 0
    }
  },
  grow: {
    flexGrow: 1
  },
  section: {
    display: "flex"
  }
}));

const MENU_ITEMS = [
  {
    name: "About",
    id: "about"
  },
  {
    name: "Skills",
    id: "skills"
  },
  {
    name: "Social",
    id: "social"
  }
];

const getScrollToHandler = (elementId: string) => () =>
  document.getElementById(elementId)?.scrollIntoView({ behavior: "smooth" });

const TopBar: React.FC<{}> = props => {
  const classes = useStyles(props);
  return (
    <HideOnScroll>
      <AppBar position="sticky" className={classes.root}>
        <Toolbar>
          <div className={classes.section}>
            {MENU_ITEMS.map(({ name, id }) => (
              <div
                onClick={getScrollToHandler(id)}
                className={classes.titleContainer}
                key={id}
              >
                <Typography variant="button" className={classes.title}>
                  {name}
                </Typography>
              </div>
            ))}
          </div>
          <div className={classes.grow} />
        </Toolbar>
      </AppBar>
    </HideOnScroll>
  );
};

export default TopBar;
