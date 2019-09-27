# @eropple/nestjs-bunyan-logger #
[![npm version](https://badge.fury.io/js/%40eropple%2Fnestjs-bunyan-logger.svg)](https://badge.fury.io/js/%40eropple%2Fnestjs-bunyan-logger)

This package provides a [NestJS](https://nestjs.com) `LoggerService` that uses
Bunyan under the hood.

## Example ##
Just create a `BunyanLoggerService` with your preferred root logger and pass it
to the `logger` option of `NestFactory.create()`.

```ts
import { NestFactory } from '@nestjs/core';
import * as Bunyan from "bunyan";
import { BunyanLoggerService } from "@eropple/nestjs-bunyan-logger";

import { AppModule } from './app.module';

const ROOT_LOGGER = Bunyan.createLogger({ name: "mycoolapp", level: Bunyan.DEBUG });

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new BunyanLoggerService(ROOT_LOGGER)
  });
  await app.listen(3000);
}
bootstrap();
```
