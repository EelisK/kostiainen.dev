import * as React from "react";
import {
  Theme,
  AppBar,
  Paper,
  Tabs,
  Tab,
  Avatar,
  Grid,
  useScrollTrigger,
  Collapse
} from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import ScrollSpy from "../ScrollSpy";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    background: theme.palette.background.default,
    maxHeight: "100%"
  },
  avatar: {
    width: theme.spacing(10),
    height: theme.spacing(10)
  },
  topSection: {
    padding: theme.spacing(2)
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
  document
    .getElementById(elementId)
    ?.scrollIntoView({ behavior: "smooth", block: "center" });

const TopBar: React.FC<{}> = props => {
  const classes = useStyles(props);
  const [section, setSection] = React.useState(0);
  const notOnTop = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50
  });
  const onScrollUpdate = (firstVisibleId: string) =>
    setSection(MENU_ITEMS.findIndex(x => x.id === firstVisibleId));

  return (
    <AppBar position="fixed" className={classes.root} hidden={false}>
      <ScrollSpy ids={MENU_ITEMS.map(x => x.id)} onUpdate={onScrollUpdate} />
      <Collapse
        in={!notOnTop}
        collapsedHeight={"0px"}
        timeout={{
          enter: 300,
          exit: 200
        }}
        unmountOnExit
      >
        <Grid
          container
          justify="center"
          alignItems="center"
          direction="column"
          className={classes.topSection}
        >
          <Avatar src="/assets/profile.jpg" className={classes.avatar} />
        </Grid>
      </Collapse>
      <Paper className={classes.root}>
        <Tabs
          indicatorColor="primary"
          textColor="primary"
          value={section}
          onChange={(_, value) => setSection(value)}
          centered
        >
          {MENU_ITEMS.map(({ name, id }) => (
            <Tab label={name} key={id} onClick={getScrollToHandler(id)} />
          ))}
        </Tabs>
      </Paper>
    </AppBar>
  );
};

export default TopBar;
