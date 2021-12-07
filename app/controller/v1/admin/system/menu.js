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

  async create() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.createdAt = new Date();
    query.createdBy = ctx.state.user.userName;
    if (query.path) {
      const componentName = query.path.replace(/^\//, '');
      if (query.isFrame === '1') {
        // 校验URL地址合法性
        const reg =
        /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/i;
        if (reg.test(query.path)) {
          query.name = query.path;
        } else {
          throw Error('外链的URL（路由）地址不合法！');
        }
      } else {
        query.name = componentName.charAt(0).toUpperCase() + componentName.slice(1);
      }
    }
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  async update() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.updatedAt = new Date();
    query.updatedBy = ctx.state.user.userName;
    const id = this.ctx.helper.parseInt(ctx.params.id);
    if (query.path) {
      const componentName = query.path.replace(/^\//, '');
      if (query.isFrame === '1') {
        const reg =
        /^(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]$/i;
        if (reg.test(query.path)) {
          query.name = query.path;
        } else {
          throw Error('外链的URL（路由）地址不合法！');
        }
      } else {
        query.name = componentName.charAt(0).toUpperCase() + componentName.slice(1);
      }
    }
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      id,
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }
}

module.exports = Controller;
