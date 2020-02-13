import * as React from "react";
import { Typography } from "@material-ui/core";
import { TextAnimation } from "../Animation";
import WelcomePageContainer from "./WelcomePageContainer";
import {
  TextAnimationDescription,
  generateTextSequence
} from "../Animation/Text";

const ANIMATIONS: TextAnimationDescription[] = [
  generateTextSequence({
    values: [
      "I'm Eelis Kostiainen",
      "I'm a software developer",
      "I'm a SECCLO student",
      "Welcome to my homepage"
    ],
    delay: 2000,
    render: text => (
      <Typography variant="h5" display="inline">
        {text}
      </Typography>
    )
  })
];

const WelcomePage: React.FunctionComponent<{}> = () => {
  return (
    <WelcomePageContainer>
      <TextAnimation animations={ANIMATIONS} />
    </WelcomePageContainer>
  );
};

export default WelcomePage;
