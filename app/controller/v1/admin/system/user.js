'use strict';
// app/controller/users.js
const BaseController = require('../../base');


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'user';
    this.modleName = 'system';
  }

  /**
   * @api {get} /admin/system/getInfo 查询用户信息
   * @apiName 查询用户信息
   * @apiGroup User-用户管理
   *
   * @apiSuccessExample Success-Response:
      HTTP/1.1 200 OK
      {
        "code":100010,
        "message":"查询成功",
        "data":{
          "permissions":[
            "*:*:*"
          ],
          "user":{
            "id":1,
            "deptId":1,
            "userName":"admin",
            "nickName":"admin123",
            "sex":"1",
            "password":"$2a$10$h9F9wNK9FBW3LQpjH/mGHurD88WNfYUVYwSRe0wnoYT8tJVAjK0Sm",
            "avatar":"/uploads/1/CHP_1634630176570_16f194d7b8580d2950c33ab2c9e549d2.jpg",
            "email":"789sd@qq.com",
            "mobile":"13711031522",
            "isDelete":"0",
            "status":"1",
            "remark":"",
            "createdAt":"2021-07-08 14:52:13",
            "createdBy":"admin",
            "updatedAt":"2021-07-09 15:14:59",
            "updatedBy":"admin",
            "roles":[
              {
                "id":1,
                "roleName":"超级管理员",
                "roleKey":"admin",
                "roleSort":1,
                "dataScope":"1",
                "status":"1",
                "isDelete":"0",
                "remark":null,
                "createdAt":"2021-07-08 14:52:13",
                "createdBy":"admin",
                "updatedAt":null,
                "updatedBy":null,
                "user_roles":{
                  "id":20,
                  "userId":1,
                  "roleId":1
                }
              }
            ],
            "department":{
              "deptId":1,
              "parentId":0,
              "deptName":"总部",
              "orderNum":1,
              "status":"1",
              "isDelete":"0",
              "createdAt":"2021-07-08 14:52:13",
              "createdBy":"admin",
              "updatedAt":null,
              "updatedBy":null
            }
          }
        }
      }
   *
   */
  async getInfo() {
    const { ctx } = this;
    ctx.returnBody({
      permissions: ctx.state.permissions,
      user: ctx.state.user,
    }, 100010);
  }

  /**
   * @api {get} /admin/system/user 查询用户列表
   * @apiName 查询用户列表
   * @apiGroup User-用户管理
   *
   * @apiParam {Number} [pageSize] 一页条数
   * @apiParam {Number} [pageNum] 页码
   * @apiParam {Number} [deptId] 部门id
   * @apiParam {String} [userName] 用户名
   * @apiParam {Number} [status] 状态
   *
   * @apiSuccessExample Success-Response:
      HTTP/1.1 200 OK
      {
        "code": 100010,
        "message": "查询成功",
        "data": {
          "count": 13,
          "rows": [
            {
              "id": 19,
              "deptId": 1,
              "userName": "yunjiggggggg",
              "nickName": "test",
              "sex": "1",
              "avatar": null,
              "email": null,
              "mobile": null,
              "isDelete": "0",
              "status": "1",
              "remark": null,
              "createdAt": "2021-07-08 15:19:36",
              "createdBy": "admin",
              "updatedAt": null,
              "updatedBy": null,
              "department": {
                "deptId": 1,
                "parentId": 0,
                "deptName": "总部",
                "orderNum": 1,
                "status": "1",
                "isDelete": "0",
                "createdAt": "2021-07-08 14:52:13",
                "createdBy": "admin",
                "updatedAt": null,
                "updatedBy": null
              },
              "roles": [
                {
                  "id": 1,
                  "roleName": "超级管理员",
                  "roleKey": "admin",
                  "roleSort": 1,
                  "dataScope": "1",
                  "status": "1",
                  "isDelete": "0",
                  "remark": null,
                  "createdAt": "2021-07-08 14:52:13",
                  "createdBy": "admin",
                  "updatedAt": null,
                  "updatedBy": null,
                  "user_roles": {
                    "id": 8,
                    "userId": 19,
                    "roleId": 1
                  }
                }
              ]
            }
          ]
        }
      }
   */
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

  /**
   * @api {get} /admin/system/user/:id 查询单个用户
   * @apiName 查询单个用户
   * @apiGroup User-用户管理
   *
   * @apiParam {Number} id 用户id
   * @apiSuccessExample
      {
        "code": 100010,
        "message": "查询成功",
        "data": {
          "id": 1,
          "deptId": 1,
          "userName": "admin",
          "nickName": "admin123",
          "sex": "1",
          "password": "$2a$10$h9F9wNK9FBW3LQpjH/mGHurD88WNfYUVYwSRe0wnoYT8tJVAjK0Sm",
          "avatar": "/uploads/1/CHP_1634630176570_16f194d7b8580d2950c33ab2c9e549d2.jpg",
          "email": "789sd@qq.com",
          "mobile": "13711031522",
          "isDelete": "0",
          "status": "1",
          "remark": "",
          "createdAt": "2021-07-08 14:52:13",
          "createdBy": "admin",
          "updatedAt": "2021-07-09 15:14:59",
          "updatedBy": "admin",
          "roles": [
            {
              "id": 1,
              "roleName": "超级管理员",
              "roleKey": "admin",
              "roleSort": 1,
              "dataScope": "1",
              "status": "1",
              "isDelete": "0",
              "remark": null,
              "createdAt": "2021-07-08 14:52:13",
              "createdBy": "admin",
              "updatedAt": null,
              "updatedBy": null,
              "user_roles": {
                "id": 20,
                "userId": 1,
                "roleId": 1
              }
            }
          ]
        }
      }
   */
  async show() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.params, 'base.show');
    if (!validateResult) return;
    const id = ctx.helper.parseInt(this.ctx.params.id);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findOne(id);
    ctx.returnBody(result, 100010);
  }

  /**
   * @api {post} /admin/system/user 新增用户
   * @apiName 新增用户
   * @apiGroup User-用户管理
   *
   * @apiParam {String} userName 用户名
   * @apiParam {String} password 密码
   * @apiParam {Number} deptId deptId
   * @apiParam {Array} roleIds 角色ids
   * @apiParam {String} [nickName] 昵称
   * @apiParam {Number} [sex] 性别
   * @apiParam {String} [avater] 头像
   * @apiParam {String} [email] 邮箱
   * @apiParam {Number} [mobile] 手机号
   * @apiParam {String} [remark] 备注
   * @apiSuccessExample
      {
        "code": 100020,
        "message": "添加成功",
        "data": null
      }
   */
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
      remark: ctx.request.body.remark,
      createdAt: new Date(),
      createdBy: ctx.state.user.userName,
    };
    console.log(query);
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  /**
   * @api {put} /admin/system/user/:id 修改用户
   * @apiName 修改用户
   * @apiGroup User-用户管理
   *
   * @apiParam {Number} id 用户id
   * @apiParam {Number} deptId deptId
   * @apiParam {Array} roleIds 角色ids
   * @apiParam {String} [nickName] 昵称
   * @apiParam {Number} [sex] 性别
   * @apiParam {String} [avater] 头像
   * @apiParam {String} [email] 邮箱
   * @apiParam {Number} [mobile] 手机号
   * @apiParam {Number} [status] 状态
   * @apiParam {String} [remark] 备注
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
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


  /**
   * @api {delete} /admin/system/user/:id 删除
   * @apiName 删除用户
   * @apiGroup User-用户管理
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

module.exports = Controller;
