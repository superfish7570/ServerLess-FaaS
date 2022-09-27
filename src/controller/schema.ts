import {
  Controller,
  Get,
  Inject,
  Post,
  Provide,
  Body,
  ALL,
  Headers,
} from '@midwayjs/decorator';
import { Context } from '@midwayjs/faas';
import { SchemaService } from '../service/schema';
import { SchemaSaveDTO } from '../dto/schema';
import { Validate } from '@midwayjs/validate';
import { getStandardResponse, getLoginUser } from '../utils/common';

@Provide()
@Controller('/api/schema/')
export class SchemaController {
  @Inject()
  ctx: Context;

  @Inject()
  schemaService: SchemaService;

  @Get('/getLatestOne')
  async getLatestOne() {
    const result = await this.schemaService.getLatestOne();
    return getStandardResponse(true, result);
  }

  @Post('/save')
  @Validate()
  async save(
    @Body(ALL) bodyObj: SchemaSaveDTO,
    @Headers('token') token: string
  ) {
    const user = await getLoginUser(token);
    if (user.username === 'mikey') {
      const result = await this.schemaService.save(bodyObj.schema);
      return getStandardResponse(true, result);
    }
    return getStandardResponse(false, null, '你没有保存权限');
  }
}
