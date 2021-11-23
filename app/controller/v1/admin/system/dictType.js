'use strict';
// app/controller/users.js
const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'dictType';
    this.modleName = 'system';
  }

  /**
   * @api {get} /admin/system/dictType 查询列表
   * @apiGroup Logs-日志管理
   *
   * @apiParam {Number} [pageSize] 一页条数
   * @apiParam {Number} [pageNum] 页码
   * @apiParam {String} [dictName] 字典名称
   * @apiParam {String} [dictType] 类型
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
      dictName: ctx.query.dictName,
      dictType: ctx.query.dictType,
      status: ctx.query.status,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {get} /admin/system/dictType/:id 查询单个
   * @apiGroup DictType-字典类型
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
   * @api {post} /admin/system/dictType 新增
   * @apiGroup DictType-字典类型
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
   * @api {put} /admin/system/dictType/:id 修改
   * @apiGroup DictType-字典类型
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
   * @api {delete} /admin/system/dictType/:id 删除
   * @apiGroup DictType-字典类型
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
