'use strict';
const Controller = require('egg').Controller;

class BaseController extends Controller {

  /**
   * @api {get} /admin/system/模块名 查询列表
   * @apiName 查询列表
   * @apiGroup Base-通用接口
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
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {get} /admin/system/模块名/:id 查询单个
   * @apiName 查询单个
   * @apiGroup Base-通用接口
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
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findByPk(id);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {post} /admin/system/模块名 新增
   * @apiName 新增
   * @apiGroup Base-通用接口
   *
   * @apiParam {Object} query 参数
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  async create() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.createdAt = new Date();
    query.createdBy = ctx.state.user.userName;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  /**
   * @api {put} /admin/system/模块名/:id 修改
   * @apiName 修改
   * @apiGroup Base-通用接口
   *
   * @apiParam {Object} query 参数
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  async update() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.updatedAt = new Date();
    query.updatedBy = ctx.state.user.userName;
    const id = this.ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, {
      id,
    });
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  /**
   * @api {delete} /admin/system/模块名/:id 删除
   * @apiName 删除
   * @apiGroup Base-通用接口
   *
   * @apiParam {String} id 用户ids 例如：1,2,3
   * @apiSuccessExample
      {
        "code": 100040,
        "message": "删除成功",
        "data": null
      }
   */
  async destroy() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.params, 'base.destroy');
    if (!validateResult) return;
    const ids = ctx.params.id.split(',');
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].destroy(ids);

    if (result) {
      ctx.returnBody(null, 100040);
    } else {
      ctx.returnBody(null, 100041, 500);
    }
  }
}

module.exports = BaseController;
