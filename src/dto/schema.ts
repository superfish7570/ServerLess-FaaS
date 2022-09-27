import { Rule, RuleType } from '@midwayjs/validate';

export class SchemaSaveDTO {
  @Rule(RuleType.string().required())
  schema: string;
}
