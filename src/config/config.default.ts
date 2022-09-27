// src/config/config.default.ts
import { Schema } from '../entity/schema';
import { ErrorMiddleware } from '../middleware/error';

export default {
  // ...
  typeorm: {
    dataSource: {
      default: {
        type: 'mysql',
        host: 'rm-bp1n402536zdlz18vpo.mysql.rds.aliyuncs.com',
        port: 3306,
        username: 'root',
        password: '@Fish5021188',
        database: 'blog',
        synchronize: true,
        logging: false,

        // 配置实体模型
        entities: [Schema],
        middleware: [ErrorMiddleware],
      },
    },
  },
};
