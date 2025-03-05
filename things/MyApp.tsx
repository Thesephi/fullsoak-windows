import type { FunctionComponent } from "preact";
import { useEffect, useState } from "preact/hooks";
import { Box } from "./Box/index.tsx";

// console.log(`MyApp is being imported, $HOMEPATH=${Deno.env.get("HOMEPATH")}`);

export const MyApp: FunctionComponent = () => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("MyApp.tsx mounted");
  }, []);

  return (
    <section id="my-app">
      <h1>My App</h1>
      <div>
        <p>
          This App is compatible with Unix and Windows (with or without Linux
          subsystem)
        </p>
        <p>
          It is SSR'ed and is deployable to various modern app hosting service
          (e.g. Deno Deploy)
        </p>
      </div>
      <hr />
      <Box count={count} />{" "}
      <button type="button" onClick={() => setCount((x) => x + 1)}>up</button>
      <button type="button" onClick={() => setCount((x) => x - 1)}>down</button>
      <hr />
      <div id="source">
        source code:{" "}
        <a href="https://github.com/Thesephi/fullsoak-windows">
          https://github.com/Thesephi/fullsoak-windows
        </a>
      </div>
    </section>
  );
};
