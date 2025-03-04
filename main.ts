import { setupDefaultFullsoakLogger, useFullSoak } from "fullsoak";
import MyController from "./ctrl/MyController.ts";

setupDefaultFullsoakLogger();

// Learn more at https://docs.deno.com/runtime/manual/examples/module_metadata#concepts
if (import.meta.main) {
  useFullSoak({
    port: 3991,
    controllers: [MyController],
    componentsDir: import.meta.dirname + "\\things",
  });
}
