import { Controller, Get, ssr } from "fullsoak";
import { MyApp } from "../things/MyApp.tsx";

@Controller()
export default class MyController {
  @Get("/")
  serve() {
    return ssr(MyApp);
  }
}
