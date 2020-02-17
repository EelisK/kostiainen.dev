import * as React from "react";
import WorkIcon from "@material-ui/icons/Work";
import SchoolIcon from "@material-ui/icons/School";
import {
  ListItemText,
  makeStyles,
  Theme,
  Typography,
  Paper,
  GridList,
  GridListTile
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "50%",
    background: `${theme.palette.text.primary}dd`,
    color: theme.palette.primary.main,
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  gridContainer: {},
  paper: {
    background: "transparent",
    color: theme.palette.primary.main,
    padding: theme.spacing(4),
    margin: theme.spacing(2),
    boxShadow: theme.shadows[5]
  },
  gridListItem: {
    height: "100% !important",
    width: "50% !important",
    [theme.breakpoints.down("xs")]: {
      width: "100% !important"
    }
  }
}));

type ListItemDescription = {
  title: string;
  icon: React.ReactElement;
  descriptions: string[];
};

const About: React.FC<{}> = props => {
  const classes = useStyles(props);

  const renderListItem = ({
    title,
    icon,
    descriptions
  }: ListItemDescription) => (
    <GridListTile className={classes.gridListItem}>
      <Paper className={classes.paper}>
        {icon}
        <ListItemText
          primary={title}
          secondary={
            <Typography display="block" variant="caption" color="textSecondary">
              {descriptions.map((value, idx) => (
                <span key={idx}>
                  {value} <br />
                </span>
              ))}
            </Typography>
          }
        />
      </Paper>
    </GridListTile>
  );

  return (
    <div className={classes.root} id="about">
      <GridList cellHeight={200} className={classes.gridContainer}>
        {renderListItem({
          title: "Smartly.io",
          icon: <WorkIcon color="primary" />,
          descriptions: ["June 2019 - Present", "Software Developer"]
        })}
        {renderListItem({
          title: "Civilpoint Oy",
          icon: <WorkIcon color="primary" />,
          descriptions: ["May 2018 - Sep 2018", "Software Developer"]
        })}
        {renderListItem({
          title: "Aalto University",
          icon: <SchoolIcon color="primary" />,
          descriptions: [
            "Sep 2019 - Present",
            "Master's Programme in Security and Cloud Computing",
            "Erasmus Mundus Joint Master Degree"
          ]
        })}
        {renderListItem({
          title: "Aalto University",
          icon: <SchoolIcon color="primary" />,
          descriptions: [
            "Sep 2016 - July 2019",
            "Bachelor of Science (technology)",
            "Graduated with honours"
          ]
        })}
      </GridList>
    </div>
  );
};

export default About;
