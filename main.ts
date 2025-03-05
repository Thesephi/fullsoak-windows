import { setupDefaultFullsoakLogger, useFullSoak } from "fullsoak";
import MyController from "./ctrl/MyController.ts";

setupDefaultFullsoakLogger();

if (import.meta.main) {
  useFullSoak({
    port: 3991,
    controllers: [MyController],
    componentsDir: globalThis.Deno?.build.os === "windows"
      ? import.meta.dirname + "\\things"
      : import.meta.dirname + "/things",
  });
}
