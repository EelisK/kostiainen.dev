import * as React from "react";
import * as Vivus from "vivus";

export interface RequiredProps {
  src: string;
}

export type OptionalProps = Partial<
  {
    animationOptions: Vivus.VivusOptions;
  } & React.HTMLProps<any>
>;

type Props = RequiredProps & OptionalProps;

export default class extends React.Component<Props> {
  private readonly id: string = "animation";
  public componentDidMount() {
    new Vivus(
      this.id,
      this.props.animationOptions || {
        duration: 200,
        type: "delayed"
      }
    );
  }
  public render() {
    const { animationOptions, ...props } = this.props;
    return (
      <object
        id={this.id}
        type="image/svg+xml"
        data={this.props.src}
        {...props}
      ></object>
    );
  }
}
