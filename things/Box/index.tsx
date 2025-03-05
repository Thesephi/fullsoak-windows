import type { FunctionComponent } from "preact";
import { Box as AnotherBox } from "../../otherThings/Box.tsx";

type BoxProps = {
  count: number;
};

export const Box: FunctionComponent<BoxProps> = ({ count }) => {
  return (
    <>
      <div className="box">Current Count: {count}</div>
      <AnotherBox />
    </>
  );
};
