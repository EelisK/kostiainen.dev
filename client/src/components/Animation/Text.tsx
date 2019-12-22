import * as React from "react";
import Typist from "react-typist";

export interface TextAnimationDescription {
  delay?: Typist.DelayProps;
  backspace?: {
    props: Typist.BackSpaceProps;
    animations: TextAnimationDescription[];
  };
  children: React.ReactNode;
}

export interface Props {
  animations: TextAnimationDescription[];
}

const composePartialAnimation = (
  { delay, children, backspace }: TextAnimationDescription,
  key: number
): React.ReactNode => [
  ...(delay ? [<Typist.Delay {...delay} key={key * 4} />] : []),
  children,
  ...(backspace
    ? [
        <Typist.Backspace {...backspace.props} key={key * 4 + 2} />,
        ...renderTypistChildren(backspace.animations, key * 4 + 3)
      ]
    : [])
];

const renderTypistChildren = (animations: Props["animations"], key: number) =>
  animations.map((component, idx) =>
    composePartialAnimation(component, idx + key)
  );

const Text: React.FunctionComponent<Props> = props => (
  <Typist cursor={{ show: false }}>
    {renderTypistChildren(props.animations, 0)}
  </Typist>
);

export default Text;
