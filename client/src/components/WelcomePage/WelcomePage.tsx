import * as React from "react";
import { makeStyles } from "@material-ui/styles";
import { Theme, Typography } from "@material-ui/core";
import { TextAnimation } from "../Animation";
import WelcomePageContainer from "./WelcomePageContainer";
import { TextAnimationDescription } from "../Animation/Text";

const useStyles = makeStyles((theme: Theme) => ({
  root: { display: "flex", width: theme.spacing(10), height: "100%" },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    width: "100%",
    height: theme.spacing(10)
  }
}));

const LINE_BREAK = { children: <br /> };
const ANIMATIONS: TextAnimationDescription[] = [
  {
    children: (
      <Typography variant="h2" display="inline">
        Hello,
      </Typography>
    )
  },
  LINE_BREAK,
  {
    children: (
      <Typography variant="h4" display="inline">
        I'm Eelis Kostiainen
      </Typography>
    ),
    delay: { ms: 1000 }
  },
  LINE_BREAK,
  {
    children: (
      <Typography variant="h4" display="inline">
        Welcome to my homepage
      </Typography>
    ),
    delay: { ms: 1000 }
  }
];

const WelcomePage: React.FunctionComponent<{}> = () => {
  // const classes = useStyles(props);
  return (
    <WelcomePageContainer>
      <TextAnimation animations={ANIMATIONS} />
    </WelcomePageContainer>
  );
};

export default WelcomePage;
