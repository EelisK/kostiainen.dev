import * as React from "react";
import { Typography } from "@material-ui/core";
import { TextAnimation } from "../Animation";
import WelcomePageContainer from "./WelcomePageContainer";
import { TextAnimationDescription } from "../Animation/Text";

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
  return (
    <WelcomePageContainer>
      <TextAnimation animations={ANIMATIONS} />
    </WelcomePageContainer>
  );
};

export default WelcomePage;
