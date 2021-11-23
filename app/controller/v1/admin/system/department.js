'use strict';
// app/controller/users.js
const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'department';
    this.modleName = 'system';
  }

  /**
   * @api {get} /admin/system/department 查询列表
   * @apiGroup Department-部门管理
   *
   * @apiParam {Number} [pageSize] 一页条数
   * @apiParam {Number} [pageNum] 页码
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data": {...}
      }
   */
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query, [[ 'orderNum', 'ASC' ]]);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {put} /admin/system/department/:id 修改
   * @apiGroup Department-部门管理
   *
   * @apiParam {Object} query 参数
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": {
          "count": 36,
          "rows": []
        }
      }
   */
  async update() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
    if (!validateResult) return;
    const query = ctx.request.body;
    const id = this.ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      deptId: id,
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }
  /**
   * @api {get} /admin/system/department/:id 查询单个
   * @apiGroup Department-部门管理
   *
   * @apiParam {Number} id id
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data": {...}
      }
   */
  /**
   * @api {post} /admin/system/department 新增
   * @apiGroup Department-部门管理
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
   * @api {delete} /admin/system/department/:id 删除
   * @apiGroup Department-部门管理
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
