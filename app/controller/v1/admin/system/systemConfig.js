'use strict';

const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'systemConfig';
    this.modleName = 'system';
  }

  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      name: ctx.query.name,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
