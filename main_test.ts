import { superoak } from "superoak";
import { assertSnapshot } from "@std/testing/snapshot";
import { useFullSoak } from "fullsoak/testing";
import MyController from "./ctrl/MyController.ts";

Deno.test(async function MyApp(t) {
  const controllers = [MyController];
  const app = await useFullSoak({ controllers });
  const req = await superoak(app);
  const res = await req
    .get("/")
    .expect(200);
  await assertSnapshot(t, res.text);
});
