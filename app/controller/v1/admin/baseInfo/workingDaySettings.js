'use strict';

const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'workingDaySettings';
    this.modleName = 'baseInfo';
  }

  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      day: ctx.query.day,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
