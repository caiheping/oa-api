'use strict';
// app/controller/users.js
const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'user';
    this.modleName = 'system';
  }
  // 查询用户信息
  async getInfo() {
    const { ctx } = this;
    ctx.returnBody({
      permissions: ctx.state.permissions,
      user: ctx.state.user,
    }, 100010);
  }

  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
      userName: ctx.query.userName ? ctx.query.userName : '',
      status: ctx.query.status ? ctx.query.status : '',
      deptId: parseInt(ctx.query.deptId),
    };
    let len = 0;
    // 角色id查询
    if (ctx.query.roleId) {
      const userIds = await service.v1.admin.system.role.findAllByRoleId({
        roleId: ctx.helper.parseInt(ctx.query.roleId),
      });
      if (userIds.length) {
        len = JSON.parse(JSON.stringify(userIds.map(item => item.userId)));
        query.ids = userIds.map(item => item.userId).splice((query.offset - 1) * query.limit, query.limit);
      }
    }
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    if (len && len.length) {
      result.count = len.length;
    } else {
      result.count = await service[this.app.config.public].admin[this.modleName][this.serviceName].getCount();
    }
    ctx.returnBody(result, 100010);
  }

  // 查询单个
  async show() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.params, 'base.show');
    if (!validateResult) return;
    const id = ctx.helper.parseInt(this.ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findOne(id);
    ctx.returnBody(result, 100010);
  }

  // 新增
  async create() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, 'user.create');
    if (!validateResult) return;
    ctx.request.body.password = await ctx.genHash(ctx.request.body.password);
    const query = {
      userName: ctx.request.body.userName,
      password: ctx.request.body.password,
      deptId: ctx.request.body.deptId,
      nickName: ctx.request.body.nickName,
      sex: ctx.request.body.sex,
      avater: ctx.request.body.avater,
      email: ctx.request.body.email,
      mobile: ctx.request.body.mobile,
      salary: ctx.request.body.salary,
      position: ctx.request.body.position,
      entryTime: ctx.request.body.entryTime ? ctx.request.body.entryTime : null,
      birthday: ctx.request.body.birthday ? ctx.request.body.birthday : null,
      education: ctx.request.body.education,
      remark: ctx.request.body.remark,
      createdAt: new Date(),
      createdBy: ctx.state.user.userName,
    };
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    const validate = Object.assign({}, ctx.request.body, ctx.params);
    const validateResult = await ctx.checkValidate(validate, 'user.update');
    if (!validateResult) return;

    const query = {
      deptId: ctx.request.body.deptId,
      nickName: ctx.request.body.nickName,
      sex: ctx.request.body.sex,
      avater: ctx.request.body.avater,
      email: ctx.request.body.email,
      mobile: ctx.request.body.mobile,
      salary: ctx.request.body.salary,
      position: ctx.request.body.position,
      entryTime: ctx.request.body.entryTime,
      birthday: ctx.request.body.birthday,
      education: ctx.request.body.education,
      status: ctx.request.body.status,
      remark: ctx.request.body.remark,
      updatedAt: new Date(),
      updatedBy: ctx.state.user.userName,
    };
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].update(query, id);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  // 删除
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

module.exports = Controller;
