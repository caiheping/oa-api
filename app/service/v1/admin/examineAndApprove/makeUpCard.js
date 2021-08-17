'use strict';

const BaseService = require('../../base');
const Sequelize = require('sequelize');
const Op = Sequelize.Op;


class Service extends BaseService {
  constructor(...arg) {
    super(...arg);
    this.modelName = 'MakeUpCard';
  }

  // 查询, 传页码，分页返回，否则全部返回
  async findList(query, order = [[ 'createdAt', 'DESC' ]]) {
    console.log(query, 123);
    const obj = {
      where: {},
      order,
      include: [{
        model: this.ctx.model.Users,
        as: 'user',
      }, {
        model: this.ctx.model.ClockIn,
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
        obj.where[key] = {
          [Op.like]: '%' + query[key] + '%',
        };
      }
      if (key === 'userId') {
        obj.where[key] = {
          [Op.or]: query[key].length ? query[key] : [ -1 ],
        };
      }
    }
    return await this.ctx.model[this.modelName].findAndCountAll(obj);
  }
}

module.exports = Service;
