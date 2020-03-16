import * as React from "react";

export interface Props {
  ids: string[];
  onUpdate(id: string): void;
}

export interface State {
  visibleElementId: string | null;
}

export class ScrollSpy extends React.PureComponent<Props, State> {
  public state: State = {
    visibleElementId: null
  };

  public componentDidMount() {
    window.addEventListener("scroll", this.scrollListener);
  }

  public componentWillUnmount() {
    window.removeEventListener("scroll", this.scrollListener);
  }

  public render(): React.ReactNode {
    return null;
  }

  private scrollListener = (_: Event) => {
    const visibleElementId = this.props.ids.find(id =>
      this.elementIsInView(document.getElementById(id))
    );

    if (visibleElementId && visibleElementId !== this.state.visibleElementId) {
      this.setState({ visibleElementId });
      this.props.onUpdate(visibleElementId);
    }
  };

  private elementIsInView = (element: HTMLElement | null) => {
    if (!element) return false;
    const dimensions = element.getBoundingClientRect();
    return dimensions.top >= 0;
  };
}
