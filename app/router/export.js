'use strict';

module.exports = app => {
  const { router, controller } = app;
  router.post(`/api/${app.config.public}/admin/system/logs/export`, app.middleware.auth({
    get: 'system:logs:export',
  }), controller[app.config.public].exportFile.exportLogs); // 导出日志
};
