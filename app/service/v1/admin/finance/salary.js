'use strict';

const BaseService = require('../../base');
const { getFirstAndLastMonthDay } = require('../../../../utils/tools');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'Salary';
  }

  // 查询
  async findList(query, order = [[ 'createdAt', 'DESC' ]]) {
    const obj = {
      where: {},
      order,
      include: [{
        model: this.ctx.model.Users,
        as: 'user',
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
      if (key !== 'limit' && key !== 'offset' && key !== 'userId') {
        if (!query[key]) {
          query[key] = '';
        }
        if (key === 'yearAndMounth' && query[key]) {
          obj.where[key] = {
            [Op.between]: getFirstAndLastMonthDay(query[key]),
          };
        } else {
          obj.where[key] = {
            [Op.like]: '%' + query[key] + '%',
          };
        }
      }
      if (key === 'userId') {
        obj.where[key] = {
          [Op.or]: query[key].length ? query[key] : [ -1 ],
        };
      }
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }

  // 批量新增
  async createMore(dataLists) {
    console.log(dataLists, 44444456465);
    return await this.ctx.model[this.modelName].bulkCreate(dataLists);
  }
}

module.exports = Service;
