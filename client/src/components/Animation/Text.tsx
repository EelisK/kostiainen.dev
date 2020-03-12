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
  className?: string;
  cursor?: React.ReactNode;
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

const renderTypistChildren = (
  animations: Props["animations"],
  key: number = 0
) =>
  animations.map((component, idx) =>
    composePartialAnimation(component, idx + key)
  );

const Text: React.FunctionComponent<Props> = props => (
  <>
    <Typist cursor={{ show: false }} className={props.className}>
      {renderTypistChildren(props.animations)}
    </Typist>
    {props.cursor}
  </>
);

export interface TextSequenceGenerator {
  values: string[];
  delay: number;
  render?: (value: string) => React.ReactNode;
}

export const generateTextSequence = (
  { values, delay, render = x => x }: TextSequenceGenerator,
  index = 0
): TextAnimationDescription => ({
  children: render(values[index]),
  backspace: index < values.length - 1 && {
    props: {
      delay: delay,
      count: values[index].length
    },
    animations: [generateTextSequence({ values, delay, render }, index + 1)]
  }
});

export default Text;
