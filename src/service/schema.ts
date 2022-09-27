import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/typeorm';
import { Schema } from '../entity/schema';
import { Not, Repository } from 'typeorm';

@Provide()
export class SchemaService {
  @InjectEntityModel(Schema)
  schemaModel: Repository<Schema>;
  // 向数据库新增数据
  async save(schemaStr: string) {
    const schema = new Schema();
    schema.schema = schemaStr;
    return await this.schemaModel.save(schema);
  }

  // getLatestOne 方法
  async getLatestOne() {
    const schema = await this.schemaModel.findOne({
      select: ['schema'],
      where: { id: Not(0) },
      order: { id: 'DESC' },
    });
    return schema;
  }
}
