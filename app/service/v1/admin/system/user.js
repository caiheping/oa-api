'use strict';

const BaseService = require('../../base');
const { getDeptWhere } = require('../../../../utils/auth');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'Users';
  }

  // 查询, 传页面，分页返回，否则全部返回
  async findList(query, order = [[ 'createdAt', 'DESC' ]]) {
    const obj = {
      where: {},
      order,
      attributes: {
        exclude: [ 'password' ],
      },
      include: [{
        model: this.ctx.model.Departments,
      }, {
        model: this.ctx.model.Roles,
        as: 'roles',
      }],
    };
    if (query.offset) {
      query.limit = query.limit ? query.limit : 10;
      query.offset = (query.offset - 1) * query.limit;
      obj.limit = query.limit;
      obj.offset = query.offset;
    } else {
      query.limit = null;
      query.offset = null;
    }
    for (const key in query) {
      if (key !== 'limit' && key !== 'offset') {
        if (key === 'deptId') {
          obj.where[key] = getDeptWhere(this.ctx, {
            deptId: query.deptId,
          }).deptId;
        } else if (key === 'ids') {
          obj.where.id = {
            [Op.in]: query[key],
          };
          obj.limit = null;
          obj.offset = null;
        } else {
          obj.where[key] = {
            // 模糊查询
            [Op.like]: '%' + query[key] + '%',
          };
        }
      }
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 查询条数
  async getCount() {
    return await this.ctx.model[this.modelName].count();
  }

  // 查询某条数据
  async findOne(id) {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id,
      },
      include: [{
        model: this.ctx.model.Roles,
        as: 'roles',
      }],
    });
  }

  // 新增
  async create(query) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();

    try {
      // 事务增操作
      const user = await this.ctx.model.Users.create(query, {
        transaction,
      });
      const roleIds = this.ctx.request.body.roleIds;
      const roleQuery = [];
      for (let i = 0; i < roleIds.length; i++) {
        const obj = {};
        obj.roleId = roleIds[i];
        obj.userId = user.id;
        roleQuery.push(obj);
      }

      // 事务批量增操作
      await this.ctx.model.UserRole.bulkCreate(roleQuery, {
        transaction,
      });
      // 提交事务
      await transaction.commit();
      return true;
    } catch (error) {
      console.log(error);
      transaction.rollback();
      if (error.name === 'SequelizeUniqueConstraintError') {
        this.ctx.throw(500, '用户名已经被占用');
      } else {
        this.ctx.throw(500, '服务器错误');
      }
    }
  }

  // 修改密码
  async resetPwd(query, id) {
    return await this.ctx.model[this.modelName].update(query, {
      where: {
        id,
      },
    });
  }

  // 修改头像
  async updateUserImg(query, id) {
    console.log(query);
    return await this.ctx.model[this.modelName].update(query, {
      where: {
        id,
      },
    });
  }

  // 修改
  async update(query, id) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      // 事务增操作
      await this.ctx.model.Users.update(query, {
        where: {
          id,
        },
        transaction,
      });
      await this.ctx.model.UserRole.destroy({
        where: {
          userId: id,
        },
        transaction,
      });
      const roleIds = this.ctx.request.body.roleIds;
      const roleQuery = [];
      for (let i = 0; i < roleIds.length; i++) {
        const obj = {};
        obj.roleId = roleIds[i];
        obj.userId = id;
        roleQuery.push(obj);
      }

      // 事务批量增操作
      await this.ctx.model.UserRole.bulkCreate(roleQuery, {
        transaction,
      });
      // 提交事务
      await transaction.commit();
      return true;
    } catch (error) {
      transaction.rollback();
      if (error.name === 'SequelizeUniqueConstraintError') {
        this.ctx.throw(500, '用户名已经被占用');
      } else {
        this.ctx.throw(500, '服务器错误');
      }
    }
  }

  // 删除
  async destroy(ids) {
    if (ids.includes('1')) {
      this.ctx.throw('超级管理员不能被删除');
    }
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      await this.ctx.model.Users.destroy({
        where: {
          id: {
            [Op.or]: ids,
          },
        },
        transaction,
      });
      await this.ctx.model.UserRole.destroy({
        where: {
          userId: {
            [Op.or]: ids,
          },
        },
        transaction,
      });
      // 提交事务
      await transaction.commit();
      return true;
    } catch (error) {
      transaction.rollback();
      this.ctx.throw(500, '服务器错误');
    }
  }
}

module.exports = Service;
