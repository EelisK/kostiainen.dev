import * as React from "react";
import ContactForm from "./ContactForm";
import ContactButton from "./ContactButton";
import { connect } from "react-redux";
import { PageState } from "../../types";
import State from "../../types/State";
import { Fade } from "@material-ui/core";

export const Contact: React.FC<{ display: boolean }> = props => (
  <Fade
    in={props.display}
    style={{ transitionDelay: props.display ? "500ms" : "0ms" }}
  >
    <div>
      <ContactForm />
      <ContactButton />
    </div>
  </Fade>
);

export default connect((state: State) => ({
  display: state.page === PageState.Main
}))(Contact);
