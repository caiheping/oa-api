'use strict';
// app/controller/users.js
const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'menu';
    this.modleName = 'system';
  }
  /**
   * @api {get} /admin/system/menu 查询所有
   * @apiGroup Menu-菜单管理
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data":  {
          "count": 36,
          "rows": []
        }
      }
   */
  async index() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findAllMenu();
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {get} /admin/system/menu/userMenu 查询用户菜单
   * @apiGroup Menu-菜单管理
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data": {...}
      }
   */
  async userMenu() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findByUser();
    ctx.returnBody(result, 100010);
  }
}

module.exports = Controller;
