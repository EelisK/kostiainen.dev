import * as React from "react";
import { Theme } from "@material-ui/core";
import WelcomePageContainer from "./WelcomePageContainer";
import {
  TextAnimationDescription,
  generateTextSequence
} from "../Animation/Text";
import { TextAnimation } from "../Animation";
import { makeStyles } from "@material-ui/styles";

const useStyles = makeStyles<Theme, {}>((theme: Theme) => ({
  "@keyframes blinker": {
    from: { opacity: 1.0 },
    "50%": { opacity: 0 },
    to: { opacity: 1.0 }
  },
  typed: {
    fontSize: theme.spacing(8),
    color: theme.palette.text.primary,
    display: "inline"
  },
  cursor: {
    position: "relative",
    width: theme.spacing(4),
    animation: "$blinker .8s infinite",
    height: theme.spacing(),
    fontSize: "0",
    background: "#092545",
    display: "inline-block",
    marginLeft: theme.spacing(0.5)
  }
}));

const WelcomePage: React.FunctionComponent<{}> = props => {
  const classes = useStyles(props);
  const animations: TextAnimationDescription[] = [
    generateTextSequence({
      values: [
        "I'm Eelis Kostiainen",
        "I'm a software developer",
        "I'm a SECCLO student",
        "Welcome to my homepage"
      ],
      delay: 2000,
      render: text => <span className={classes.typed}>{text}</span>
    })
  ];
  return (
    <WelcomePageContainer>
      <TextAnimation
        animations={animations}
        className={classes.typed}
        cursor={<span className={classes.cursor} />}
      />
    </WelcomePageContainer>
  );
};

export default WelcomePage;
