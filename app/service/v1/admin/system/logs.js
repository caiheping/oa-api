'use strict';

const BaseService = require('../../base');


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'Logs';
  }

  // 清空所有
  async deleteAll() {
    return await this.ctx.model[this.modelName].destroy({
      truncate: true,
    });
  }
}

module.exports = Service;
