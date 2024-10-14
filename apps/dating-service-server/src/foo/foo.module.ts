import { Module } from "@nestjs/common";
import { FooService } from "./foo.service";
import { FooController } from "./foo.controller";
import { FooResolver } from "./foo.resolver";

@Module({
  controllers: [FooController],
  providers: [FooService, FooResolver],
  exports: [FooService],
})
export class FooModule {}
