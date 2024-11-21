import * as graphql from "@nestjs/graphql";
import { FooService } from "./foo.service";

export class FooResolver {
  constructor(protected readonly service: FooService) {}
}
