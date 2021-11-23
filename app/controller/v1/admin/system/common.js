'use strict';
const Controller = require('egg').Controller;
const fs = require('fs');
const JWT = require('jsonwebtoken');
const { mkdirsSync } = require('../../../../utils/tools');

class CommonController extends Controller {

  /**
   * @api {post} /login 登录
   * @apiGroup Common-基础模块
   *
   * @apiParam {String} userName 用户名
   * @apiParam {String} password 密码
   * @apiParam {String} captcha 验证码
   * @apiSuccessExample
      {
        "code": 0,
        "message": "成功",
        "data": {
          "userInfo": {
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
            }
          },
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwidXNlck5hbWUiOiJhZG1pbiIsImlhdCI6MTYzNzU2NTgxMCwiZXhwIjoxNjM3NjUyMjEwfQ.9xW9Z5YepLGK6oguslel7eVh4kby3AegM5aZ4GePtSU"
        }
      }
   */
  async login() {
    const { ctx, service } = this;
    ctx.state.user = null;
    const query = ctx.request.body;
    const validateResult = await this.ctx.validate('user.login', query);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;
    // 从service文件中拿到返回结果
    if (!ctx.session.code || ctx.session.code.toLowerCase() !== query.captcha.toLowerCase()) {
      return ctx.throw(500, '验证码错误');
    }
    const result = await service[this.app.config.public].admin.system.common.login(query);
    if (!result) {
      return ctx.throw(500, '用户不存在');
    }
    const checkPwd = await ctx.compare(query.password, result.get('password')); // 对比两次密码是否一致
    if (!checkPwd) {
      return ctx.throw(500, '用户名或密码错误');
    } else if (result.status === '0' && result.id !== 1) {
      return ctx.throw(500, '该用户已经被停用！');
    } else if (result.department.status === '0' && result.id !== 1) {
      return ctx.throw(500, '该用户所在部门已经被停用！');
    }
    // 签发token
    const token = JWT.sign(
      {
        id: result.id,
        userName: result.userName,
      },
      this.config.jwt.secret,
      {
        expiresIn: this.config.jwt.expiresIn,
      }
    );
    ctx.state.user = result;
    ctx.returnBody({
      userInfo: result,
      token,
    });
  }


  /**
   * @api {post} /logout 登出
   * @apiGroup Common-基础模块
   */
  async logout() {
    const { ctx } = this;
    ctx.state = {};
    ctx.returnBody(null, 0);
  }

  /**
   * @api {get} /captcha 验证码
   * @apiGroup Common-基础模块
   */
  async captcha() {
    const { ctx, service } = this;
    const captcha = await service[this.app.config.public].admin.system.common.captcha(); // 服务里面的方法
    ctx.response.type = 'image/svg+xml'; // 知道你个返回的类型
    ctx.body = captcha.data; // 返回一张图片
  }


  /**
   * @api {put} /admin/system/user/:id/resetPwd 重置密码
   * @apiParam {Number} id id
   * @apiParam {Number} newPassword 新密码
   * @apiGroup Common-基础模块
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  async resetPwd() {
    const { ctx, service } = this;
    const validate = Object.assign({}, ctx.request.body, ctx.params);
    const validateResult = await this.ctx.validate('user.resetPwd', validate);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;

    ctx.request.body.newPassword = await ctx.genHash(ctx.request.body.newPassword);
    const query = {
      password: ctx.request.body.newPassword,
    };
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin.system.user.resetPwd(query, id);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  /**
   * @api {put} /admin/system/user/:id/updateUserPwd 修改密码
   * @apiParam {Number} id id
   * @apiParam {String} password 旧密码
   * @apiParam {String} newPassword 新密码
   * @apiGroup Common-基础模块
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  async updateUserPwd() {
    const { ctx, service } = this;
    const validate = Object.assign({}, ctx.request.body, ctx.params);
    const validateResult = await this.ctx.validate('user.updatePwd', validate);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;
    const checkPwd = await ctx.compare(ctx.request.body.password, ctx.state.user.password); // 对比两次密码是否一致
    if (!checkPwd) {
      return ctx.throw(500, '原始密码错误');
    }
    ctx.request.body.newPassword = await ctx.genHash(ctx.request.body.newPassword);
    const query = {
      password: ctx.request.body.newPassword,
    };
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin.system.user.resetPwd(query, id);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  /**
   * @api {put} /admin/system/user/:id/updateUserImg 修改头像
   * @apiParam {Number} id id
   * @apiParam {String} avatar 头像
   * @apiGroup Common-基础模块
   * @apiSuccessExample
      {
        "code": 100030,
        "message": "修改成功",
        "data": null
      }
   */
  async updateUserImg() {
    const { ctx, service } = this;

    const validate = Object.assign({}, ctx.request.body, ctx.params);
    const validateResult = await this.ctx.validate('user.updateUserImg', validate);
    // 验证不通过时，阻止后面的代码执行
    if (!validateResult) return;
    const query = {
      avatar: ctx.request.body.avatar,
    };
    const id = ctx.helper.parseInt(ctx.params.id);
    const result = await service[this.app.config.public].admin.system.user.updateUserImg(query, id);
    if (result) {
      ctx.returnBody(null, 100030);
    } else {
      ctx.returnBody(null, 100031, 500);
    }
  }

  /**
   * @api {post} /upload 上传
   * @apiParam {File} files 文件
   * @apiGroup Common-基础模块
   * @apiSuccessExample
      {
        "code": 0,
        "message": "上传成功",
        "data": {
          path: "..."
        }
      }
   */
  async upload() {
    const { ctx } = this;
    if (!ctx.request.files.length) {
      return ctx.returnBody(null, 200015, 500);
    }
    const file = ctx.request.files[0];
    const fileinfo = fs.readFileSync(file.filepath);
    const name = `CHP_${new Date().getTime()}_${file.filename}`;
    const filePath = `/uploads/${ctx.state.user.id}/${name}`;
    const target = `app/public/uploads/${ctx.state.user.id}/${name}`;

    mkdirsSync(`app/public/uploads/${ctx.state.user.id}`); // 递归生成文件夹
    try {
      await fs.writeFileSync(target, fileinfo);
    } catch (error) {
      throw error;
    } finally {
      await fs.unlink(file.filepath, err => {
        if (err) {
          throw err;
        }
        console.log('删除缓存文件:' + file.filepath + '成功！');
      });
    }
    ctx.returnBody({
      path: filePath, // 路径
    }, 0);
  }
}

module.exports = CommonController;
