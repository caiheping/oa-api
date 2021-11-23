'use strict';
// app/controller/users.js
const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'role';
    this.modleName = 'system';
  }

  /**
   * @api {get} /admin/system/role 查询列表
   * @apiGroup Role-角色管理
   *
   * @apiParam {Number} [pageSize] 一页条数
   * @apiParam {Number} [pageNum] 页码
   * @apiParam {String} [roleName] 角色名称
   * @apiParam {String} [status] 状态
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
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      roleName: ctx.query.roleName,
      status: ctx.query.status,
      createdBy: ctx.state.user.id === 1 ? null : ctx.state.user.userName,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query, [[ 'roleSort', 'ASC' ]]);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {put} /admin/system/role/changeRoleStatus 修改
   * @apiGroup Role-角色管理
   *
   * @apiParam {Number} id id
   * @apiParam {String} status 状态
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  async changeRoleStatus() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      status: ctx.request.body.status,
    };
    const id = this.ctx.helper.parseInt(ctx.request.body.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].updateStatus(query, {
      id,
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  /**
   * @api {get} /admin/system/role/:id 查询单个
   * @apiGroup Role-角色管理
   *
   * @apiParam {Number} id id
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data": {...}
      }
   */
  async show() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.params, 'base.show');
    if (!validateResult) return;
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findOne(id);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {post} /admin/system/role 新增
   * @apiGroup Role-角色管理
   *
   * @apiParam {Object} query 参数
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  /**
   * @api {put} /admin/system/role/:id 修改
   * @apiGroup Role-角色管理
   *
   * @apiParam {Object} query 参数
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  /**
   * @api {delete} /admin/system/role/:id 删除
   * @apiGroup Role-角色管理
   *
   * @apiParam {String} id 用户ids 例如：1,2,3
   * @apiSuccessExample
      {
        "code": 100040,
        "message": "删除成功",
        "data": null
      }
   */
}

module.exports = Controller;
