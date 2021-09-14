'use strict';

const BaseController = require('../../base');
const Sequelize = require('sequelize');
const moment = require('moment');
const { getFirstAndLastMonthDay } = require('../../../../utils/tools');
const Op = Sequelize.Op;


class Controller extends BaseController {
  constructor(...arg) {
    super(...arg);
    this.serviceName = 'salary';
    this.modleName = 'finance';
  }

  // 查询
  async index() {
    const { ctx, service } = this;
    // 查询参数
    const query = {
      limit: ctx.helper.parseInt(ctx.query.pageSize),
      offset: ctx.helper.parseInt(ctx.query.pageNum),
    };
    if (ctx.query.yearAndMounth) {
      query.yearAndMounth = ctx.query.yearAndMounth;
    }

    const users = await ctx.model.Users.findAll({
      where: {
        nickName: {
          [Op.like]: '%' + ctx.query.nickName + '%',
        },
      },
    });
    const userIds = users.map(item => item.id);
    query.userId = userIds;
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].findList(query);
    ctx.returnBody(result, 100010);
  }

  // 新增
  async create() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.create');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.createdAt = new Date();
    query.createdBy = ctx.state.user.userName;
    query.userId = ctx.state.user.id;
    const user = await ctx.model.Users.findOne({ where: { id: query.userId } });
    if (!user.salary) {
      query.total = 0;
    } else {
      query.expectedAttendanceHours = query.expectedAttendanceHours || 0;
      query.attendanceHours = query.attendanceHours || 0;
      query.unpaidLeave = query.unpaidLeave || 0;
      query.subsidy = query.subsidy || 0;
      query.socialSecurityAndProvidentFund = query.socialSecurityAndProvidentFund || 0;
      query.other = query.other || 0;
      query.total = user.salary - (query.expectedAttendanceHours - query.attendanceHours + query.unpaidLeave) * (user.salary / query.expectedAttendanceHours) + query.subsidy - query.socialSecurityAndProvidentFund + query.other;
    }
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].create(query);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  // 一键生成员工工资
  async createEmployeeSalary() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.createAll');
    if (!validateResult) return;
    const salaryLists = [];
    const query = ctx.request.body;
    const users = await ctx.model.Users.findAll({
      where: {
        position: {
          [Op.ne]: '1',
        },
      },
    }); // 获取部位管理员的用户列表
    const systemConfig = await ctx.model.SystemConfig.findAll(); // 系统配置
    let expectedAttendanceHours = 0;
    let providentFund = 0;
    let socialSecurity = 0;
    systemConfig.forEach(list => {
      if (list.keyName === 'working_hours') { // 工作时长
        expectedAttendanceHours = Number(list.key);
      }
      if (list.keyName === 'providentFund') { // 公积金
        providentFund = Number(list.key);
      }
      if (list.keyName === 'socialSecurity') { // 社保
        socialSecurity = Number(list.key);
      }
    });

    // 计算考勤时长
    // 拿到当月上班天数
    const workingDaySettings = await ctx.model.WorkingDaySettings.findAll({
      where: {
        day: {
          [Op.between]: getFirstAndLastMonthDay(query.dateTime),
        },
      },
    });
    const workingDayLists = workingDaySettings.map(list => list.day);
    // 获取当月所有打卡记录
    const clockIns = await ctx.model.ClockIn.findAll({
      where: {
        createdAt: {
          [Op.between]: getFirstAndLastMonthDay(query.dateTime),
        },
      },
    });
    // 遍历用户
    users.forEach(item => {
      const obj = {
        userId: item.id,
        yearAndMounth: query.dateTime,
        createdAt: new Date(),
        createdBy: ctx.state.user.userName,
        expectedAttendanceHours: expectedAttendanceHours * query.dateLists.length,
        attendanceHours: 0,
        unpaidLeave: 0,
        subsidy: 0,
        socialSecurityAndProvidentFund: socialSecurity + (Number(item.salary) * providentFund / 100),
        other: 0,
      };
      const currentUserClockLists = clockIns.filter(list => list.userId === item.id); // 获取当前用户的打卡记录
      const clockLists = currentUserClockLists.map(list => {
        return {
          day: list.createdAt.split(' ')[0],
          firstClockInTime: list.firstClockInTime,
          lastClockInTime: list.lastClockInTime,
          userId: list.userId,
        };
      });
      // 遍历上班日期
      workingDayLists.forEach(item1 => {
        clockLists.forEach(item2 => {
          if (item1 === item2.day) {
            // 正常上下班
            if (moment(item2.firstClockInTime).isBefore(`${item1} 09:00:01`) && moment(item2.lastClockInTime).isAfter(`${item1} 17:59:59`)) {
              obj.attendanceHours += expectedAttendanceHours;
            } else {
              console.log('...');
            }
          }
        });
      });
      obj.total = Number(item.salary) - (obj.expectedAttendanceHours - obj.attendanceHours + obj.unpaidLeave) * (item.salary / obj.expectedAttendanceHours) + obj.subsidy - obj.socialSecurityAndProvidentFund + obj.other;
      salaryLists.push(obj);
    });
    const result = await service[this.app.config.public].admin[this.modleName][this.serviceName].createMore(salaryLists);
    if (result) {
      ctx.returnBody(null, 100020);
    } else {
      ctx.returnBody(null, 100021, 500);
    }
  }

  // 修改
  async update() {
    const { ctx, service } = this;
    const validateResult = await ctx.checkValidate(ctx.request.body, this.serviceName + '.update');
    if (!validateResult) return;
    const query = ctx.request.body;
    query.updatedAt = new Date();
    query.updatedBy = ctx.state.user.userName;
    query.userId = ctx.state.user.id;
    const user = await ctx.model.Users.findOne({ where: { id: query.userId } });
    if (!user.salary) {
      query.total = 0;
    } else {
      query.expectedAttendanceHours = query.expectedAttendanceHours || 0;
      query.attendanceHours = query.attendanceHours || 0;
      query.unpaidLeave = query.unpaidLeave || 0;
      query.subsidy = query.subsidy || 0;
      query.socialSecurityAndProvidentFund = query.socialSecurityAndProvidentFund || 0;
      query.other = query.other || 0;
      query.total = Number(user.salary) - (query.expectedAttendanceHours - (query.attendanceHours + query.paidLeave) + query.unpaidLeave) * parseInt(user.salary / query.expectedAttendanceHours) + Number(query.subsidy) - Number(query.socialSecurityAndProvidentFund) + Number(query.other);
    }
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
}

module.exports = Controller;
