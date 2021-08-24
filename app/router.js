'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  require('./router/admin')(app); // 后台管理系统
  require('./router/export')(app); // 所有导出接口
};
