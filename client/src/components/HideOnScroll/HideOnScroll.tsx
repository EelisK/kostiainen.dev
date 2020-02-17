import * as React from "react";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import { Slide } from "@material-ui/core";

export interface Props {
  window?: () => Window;
}

const HideOnScroll: React.FC<Props> = props => {
  const { children, window: propWindow } = props;
  const trigger = useScrollTrigger({
    target: propWindow ? propWindow() : window
  });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
};

export default HideOnScroll;
