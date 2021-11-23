'use strict';

const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'notice';
    this.modleName = 'system';
  }

  /**
   * @api {get} /admin/system/notice 查询列表
   * @apiGroup Notice-消息通告
   *
   * @apiParam {Number} [pageSize] 一页条数
   * @apiParam {Number} [pageNum] 页码
   * @apiParam {String} [noticeTitle] 标题
   * @apiParam {String} [noticeType] 类型
   * @apiParam {String} [status] 状态
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data": {
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
      noticeTitle: ctx.query.noticeTitle,
      noticeType: ctx.query.noticeType,
      status: ctx.query.status,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {get} /admin/system/notice/:id 查询单个
   * @apiGroup Notice-消息通告
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
   * @api {post} /admin/system/notice 新增
   * @apiGroup Notice-消息通告
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
   * @api {put} /admin/system/notice/:id 修改
   * @apiGroup Notice-消息通告
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
   * @api {delete} /admin/system/notice/:id 删除
   * @apiGroup Notice-消息通告
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
