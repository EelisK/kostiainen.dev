import * as React from "react";
import ReduxState from "../../types/State";
import {
  IconButton,
  Theme,
  Zoom,
  Card,
  Typography,
  TextField
} from "@material-ui/core";
import SendIcon from "@material-ui/icons/Send";
import { connect } from "react-redux";
import { withStyles, createStyles, WithStyles } from "@material-ui/styles";
import ContactFormCard from "./ContactFormCard";
import { ContactInformation } from "../../types";
import { sendMessgeStart } from "../../actions/contact";
import { TextFieldProps } from "@material-ui/core/TextField";

const styles = (theme: Theme) =>
  createStyles({
    root: {
      boxShadow: theme.shadows[3],
      position: "absolute",
      right: theme.spacing(2),
      bottom: theme.spacing(12),
      height: 700,
      width: 350,
      zIndex: 1500
    },
    container: {
      overflowY: "scroll",
      maxHeight: "100%",
      paddingTop: theme.spacing(4),
      boxShadow: theme.shadows[24],
      height: "100%",
      width: "100%"
    },
    header: {
      background: theme.palette.text.primary,
      color: theme.palette.background.default,
      display: "flex",
      alignContent: "center",
      padding: theme.spacing(4),
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: theme.spacing(20),
      zIndex: -1
    },
    form: {
      padding: theme.spacing()
    },
    input: {
      width: "100%"
    },
    sendButton: {
      background: theme.palette.text.primary,
      color: theme.palette.background.default,
      borderRadius: "50px",
      marginRight: theme.spacing(),
      marginLeft: theme.spacing()
    },
    buttonLabeComponent: {
      marginLeft: theme.spacing(),
      "&:last-child": {
        marginRight: theme.spacing()
      }
    },
    formFieldContainer: {
      margin: theme.spacing(),
      padding: theme.spacing(2)
    }
  });

interface State extends ContactInformation {}

export interface Props extends WithStyles<typeof styles> {
  visible: boolean;
  disabled: boolean;
  sendContactInformation(info: ContactInformation): void;
}

const FIELD_LABELS: { [field in keyof ContactInformation]: string } = {
  subject: "Subject",
  email: "Email",
  name: "Name",
  text: "Free form"
};

export class ContactFormPlain extends React.PureComponent<Props, State> {
  state: State = {
    name: "",
    email: "",
    subject: "",
    text: ""
  };

  private onFieldChange = (field: keyof State) => (
    evt: React.ChangeEvent<HTMLInputElement>
  ) => {
    const value: State[typeof field] = evt.target.value;
    this.setState(prev => ({ ...prev, [field]: value }));
  };

  private onSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    this.props.sendContactInformation(this.state);
  };

  render() {
    return (
      <Zoom in={this.props.visible}>
        <Card className={this.props.classes.root}>
          <div className={this.props.classes.container}>
            <div className={this.props.classes.header} />
            <form
              autoComplete="on"
              action="POST"
              onSubmit={this.onSubmit}
              className={this.props.classes.form}
            >
              {this.renderFormContent()}
            </form>
          </div>
        </Card>
      </Zoom>
    );
  }

  private renderFormContent = () => (
    <>
      {this.renderFormField("name")}
      {this.renderFormField("email", { type: "email" })}
      {this.renderFormField("subject")}
      {this.renderFormField("text", { rows: 12, multiline: true })}
      <IconButton
        className={this.props.classes.sendButton}
        type="submit"
        disabled={this.props.disabled}
      >
        <SendIcon className={this.props.classes.buttonLabeComponent} />
        <Typography
          className={this.props.classes.buttonLabeComponent}
          variant="button"
        >
          Contact me
        </Typography>
      </IconButton>
    </>
  );

  private renderFormField = (
    field: keyof ContactInformation,
    override: TextFieldProps = {}
  ) => (
    <ContactFormCard>
      <TextField
        onChange={this.onFieldChange(field)}
        disabled={this.props.disabled}
        label={FIELD_LABELS[field]}
        value={this.state[field]}
        color="secondary"
        required
        {...override}
      />
    </ContactFormCard>
  );
}

export const ContactForm = withStyles(styles)(ContactFormPlain);

export default connect(
  (state: ReduxState) => ({
    visible: state.contact.emalFormOpen,
    disabled: state.contact.formDisabled
  }),
  {
    sendContactInformation: sendMessgeStart
  }
)(ContactForm);
