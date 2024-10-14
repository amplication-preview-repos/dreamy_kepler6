import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { FooService } from "./foo.service";

@swagger.ApiTags("foos")
@common.Controller("foos")
export class FooController {
  constructor(protected readonly service: FooService) {}
}
