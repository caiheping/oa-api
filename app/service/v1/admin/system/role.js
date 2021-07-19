'use strict';

const BaseService = require('../../base');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'Roles';
  }

  // 查询某条数据
  async findOne(id) {
    return await this.ctx.model[this.modelName].findOne({
      where: {
        id,
      },
      include: [{
        model: this.ctx.model.Menus,
        as: 'menus',
      }],
    });
  }

  // 根据角色id查询数据
  async findAllByRoleId(query) {
    const obj = {
      where: {
        roleId: query.roleId,
      },
    };
    return await this.ctx.model.UserRole.findAll(obj);
  }

  // 新增
  async create(query) {
    // 创建事务
    const transaction = await this.ctx.model.transaction();
    try {
      const role = await this.ctx.model[this.modelName].create(query, {
        transaction,
      });

      const menuIds = this.ctx.request.body.menuIds;
      const menuQuery = [];
      for (let i = 0; i < menuIds.length; i++) {
        const obj = {};
        obj.menuId = menuIds[i];
        obj.roleId = role.id;
        menuQuery.push(obj);
      }

      // 事务批量增操作
      await this.ctx.model.RoleMenu.bulkCreate(menuQuery, {
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

  // 修改状态
  async updateStatus(query, where) {
    return await this.ctx.model[this.modelName].update(query, {
      where,
    });
  }

  // 修改
  async update(query, where) {
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      // 事务操作
      await this.ctx.model[this.modelName].update(query, {
        where,
        transaction,
      });
      // 删除原来的数据
      await this.ctx.model.RoleMenu.destroy({
        where: {
          roleId: where.id,
        },
        transaction,
      });
      const menuIds = this.ctx.request.body.menuIds;
      const menuQuery = [];
      for (let i = 0; i < menuIds.length; i++) {
        const obj = {};
        obj.menuId = menuIds[i];
        obj.roleId = where.id;
        menuQuery.push(obj);
      }
      // 事务批量增操作
      await this.ctx.model.RoleMenu.bulkCreate(menuQuery, {
        transaction,
      });
      // 提交事务
      await transaction.commit();
      return true;
    } catch (error) {
      transaction.rollback();
      console.log(error);
      this.ctx.throw(500, '服务器错误');
    }
  }

  // 删除
  async destroy(ids) {
    const userRole = await this.ctx.model.UserRole.findAll({
      where: {
        roleId: {
          [Op.or]: ids,
        },
      },
    });
    const idLists = userRole.map(item => item.userId);
    if (idLists.length) {
      this.ctx.throw(500, '角色下存在用户，不允许删除！');
    }
    // 建立事务对象
    const transaction = await this.ctx.model.transaction();
    try {
      await this.ctx.model[this.modelName].destroy({
        where: {
          id: {
            [Op.or]: ids,
          },
        },
        transaction,
      });
      await this.ctx.model.RoleMenu.destroy({
        where: {
          roleId: {
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
