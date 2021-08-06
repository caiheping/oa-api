/* eslint valid-jsdoc: "off" */

'use strict';
const path = require('path');

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1623119455455_4237';
  config.public = 'v1';
  config.whiteList = [ '/', `/api/${config.public}/login`, `/api/${config.public}/logout`, `/api/${config.public}/captcha` ]; // api 白名单

  // add your middleware config here
  config.middleware = [];

  // add your user config here
  const userConfig = {
    // myAppName: 'oa-egg',
  };

  // file模式上传文件
  config.multipart = {
    mode: 'file',
  };

  config.static = {
    prefix: '/',
    dir: [ path.join(__dirname, '../app/public'), path.join(__dirname, '../www') ],
  };

  config.middleware = [
    'gzip',
    'errorHandler', // 全局错误处理
    'jwt',
    // 'httplog',
  ];

  config.gzip = {
    threshold: 1024, // 小于 1k 的响应体不压缩
  };

  config.jwt = {
    secret: 'oa-api-jwt',
    expiresIn: 60 * 60 * 24, // 1天过期
  };

  config.bodyParser = {
    jsonLimit: '1mb',
    formLimit: '1mb',
  };

  config.cluster = {
    listen: {
      port: 7002, // 默认值是7001
      hostname: '0.0.0.0', // 也就是 "localhost"
    },
  };

  config.bcrypt = {
    saltRounds: 10, // default 10
  };

  config.validatePlus = {
    resolveError(ctx, errors) {
      if (errors.length) {
        ctx.type = 'json';
        ctx.status = 400;
        ctx.body = {
          code: 400,
          error: errors,
          message: '参数错误',
        };
      }
    },
  };

  config.sequelize = {
    dialect: 'mysql',
    host: '127.0.0.1',
    port: 3306,
    password: '123456', // 数据库密码
    database: 'egg-oa-sys',
    timezone: '+8:00', // 由于orm用的UTC时间，这里必须加上东八区，否则取出来的时间相差8小时
    define: { // model的全局配置
      timestamps: false, // 添加create,update,delete时间戳
      freezeTableName: false, // 防止修改表名为复数
      underscored: false, // 防止驼峰式字段被默认转为下划线
    },
    dialectOptions: { // 让读取date类型数据时返回字符串而不是UTC时间
      dateStrings: true,
      typeCast(field, next) {
        if (field.type === 'DATETIME') {
          return field.string();
        }
        return next();
      },
    },
  };

  config.security = {
    csrf: {
      enable: false,
      ignoreJSON: true,
    },
    domainWhiteList: [ '*' ],
  };
  config.cors = {
    origin: '*',
    allowMethods: 'GET,HEAD,PUT,POST,DELETE,PATCH,OPTIONS',
  };

  return {
    ...config,
    ...userConfig,
  };
};
