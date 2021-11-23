'use strict';

const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'logs';
    this.modleName = 'system';
  }

  /**
   * @api {get} /admin/system/role 查询列表
   * @apiGroup Logs-日志管理
   *
   * @apiParam {Number} [pageSize] 一页条数
   * @apiParam {Number} [pageNum] 页码
   * @apiParam {String} [createdBy] 操作人
   * @apiParam {String} [method] 请求方式
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
      createdBy: ctx.query.createdBy,
      method: ctx.query.method,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {get} /admin/system/logs/deleteAllLogs 查询列表
   * @apiGroup Logs-日志管理
   * @apiSuccessExample
      {
        "code": 100040,
        "message": "操作成功",
        "data": {...}
      }
   */
  async deleteAllLogs() {
    const { ctx, service } = this;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].deleteAll();
    ctx.returnBody(result, 100040);
  }

  /**
   * @api {delete} /admin/system/role/:id 删除
   * @apiGroup Logs-日志管理
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
