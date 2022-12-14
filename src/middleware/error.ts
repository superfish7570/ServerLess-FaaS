import { Provide, Scope, ScopeEnum } from '@midwayjs/decorator';
import { FaaSContext } from '@midwayjs/faas';
import { getStandardResponse } from '../utils/common';

@Provide('errorMiddleware')
@Scope(ScopeEnum.Singleton)
export class ErrorMiddleware {
  resolve() {
    return async (ctx: FaaSContext, next: () => Promise<any>) => {
      try {
        await next();
      } catch (error) {
        ctx.body = getStandardResponse(false, null, error.toString());
      }
    };
  }
}
