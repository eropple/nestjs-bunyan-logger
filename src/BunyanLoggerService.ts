import { LoggerService } from "@nestjs/common";
import * as Bunyan from "bunyan";

export class BunyanLoggerService implements LoggerService {
  private readonly _logger: Bunyan;

  constructor(logger: Bunyan) {
    this._logger = logger.child({ component: "Nest" });
  }

  log(message: any, context?: string | undefined) {
    this._logger.info({ context }, message);
  }
  error(message: any, trace?: string | undefined, context?: string | undefined) {
    this._logger.error({ context, trace }, message);
  }
  warn(message: any, context?: string | undefined) {
    this._logger.warn({ context }, message);
  }
}
