import type { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Box } from "./Box/index.tsx";

// console.log(`MyApp is being imported, $HOMEPATH=${Deno.env.get("HOMEPATH")}`);

export const MyApp: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    alert("MyApp.tsx mounted");
  }, []);

  return (
    <section id="my-app">
      <h1>My App</h1>
      <Box count={count} />{" "}
      <button type="button" onClick={() => setCount((x) => x + 1)}>up</button>
    </section>
  );
};
