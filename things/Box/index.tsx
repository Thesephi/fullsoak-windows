import type { FunctionComponent } from "preact";

type BoxProps = {
  count: number;
};

export const Box: FunctionComponent<BoxProps> = ({ count }) => {
  return <span className="box">Box {count}</span>;
};
