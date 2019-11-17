import * as React from "react";
import { Zoom } from "@material-ui/core";

export interface RequiredProps {
  toggled: boolean;
  inNode: React.ReactNode;
  outNode: React.ReactNode;
}

type Props = RequiredProps;

const Transition: React.StatelessComponent<Props> = ({
  toggled,
  inNode,
  outNode
}) => {
  const commonProps = { unmountOnExit: true };
  const timeout = 150;
  return (
    <>
      <Zoom
        in={toggled}
        {...commonProps}
        timeout={{ appear: timeout, enter: 0, exit: 0 }}
      >
        {inNode}
      </Zoom>
      <Zoom
        in={!toggled}
        {...commonProps}
        timeout={{ appear: 0, enter: timeout, exit: 0 }}
      >
        {outNode}
      </Zoom>
    </>
  );
};

export default Transition;
