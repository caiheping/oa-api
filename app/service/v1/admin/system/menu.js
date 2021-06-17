'use strict';

const BaseService = require('../../base');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'Menus';
  }

  async findAllMenu() {
    const obj = {
      where: {},
      order: [[ 'orderNum', 'ASC' ]],
    };

    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  async findByUser() {
    const roleIds = this.ctx.state.user.roles.map(item => item.id);
    const menus = await this.ctx.model.RoleMenu.findAll({
      where: {
        roleId: {
          [Op.or]: roleIds,
        },
      },
    });
    const menuIds = menus.map(item => item.menuId);
    const obj = {
      where: {
        id: {
          [Op.or]: menuIds,
        },
        status: '1', // 查询启用的菜单
      },
      order: [[ 'orderNum', 'ASC' ]],
    };
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 新增
  async create(query) {
    query.name = query.component; // name 和 component 一样
    return await this.ctx.model[this.modelName].create(query);
  }


  // 修改
  async update(query, where) {
    return await this.ctx.model[this.modelName].update(query, {
      where,
    });
  }

  // 刪除id
  async destroy(id) {
    try {
      // 建立事务对象
      const transaction = await this.ctx.model.transaction();

      // 事务增操作
      const menus = await this.ctx.model[this.modelName].findAll({
        where: {
          parentId: id,
        },
        transaction,
      });
      if (menus.length) {
        throw Error('含有子元素，不能删除');
      }

      // 刪除数据
      await this.ctx.model[this.modelName].destroy({
        where: {
          id,
        },
      });
      // 提交事务
      await transaction.commit();
      return true;
    } catch (error) {
      this.ctx.throw(500, error);
    }
  }
}

module.exports = Service;