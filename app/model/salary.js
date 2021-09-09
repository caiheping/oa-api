'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE, DECIMAL } = app.Sequelize;

  const Salary = app.model.define('salarys', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    userId: {
      allowNull: false,
      type: INTEGER,
      comment: '用户id',
    },
    yearAndMounth: {
      allowNull: false,
      type: DATE,
      comment: '年/月',
    },
    expectedAttendanceHours: {
      type: INTEGER,
      defaultValue: 0,
      comment: '应出勤时长',
    },
    attendanceHours: {
      type: INTEGER,
      defaultValue: 0,
      comment: '出勤时长',
    },
    paidLeave: {
      type: INTEGER,
      defaultValue: 0,
      comment: '带薪假期（小时）',
    },
    unpaidLeave: {
      type: INTEGER,
      defaultValue: 0,
      comment: '无薪假期（小时）',
    },
    beLateAndLeaveEarly: {
      type: INTEGER,
      defaultValue: 0,
      comment: '迟到早退(次数)',
    },
    subsidy: {
      type: DECIMAL(10, 2),
      defaultValue: 0.00,
      comment: '补贴',
    },
    socialSecurityAndProvidentFund: {
      type: DECIMAL(10, 2),
      defaultValue: 0.00,
      comment: '公积金/社保',
    },
    other: {
      type: DECIMAL(10, 2),
      defaultValue: 0.00,
      comment: '其他',
    },
    total: {
      type: DECIMAL(10, 2),
      defaultValue: 0.00,
      comment: '总计',
    },
    createdAt: {
      allowNull: true,
      type: DATE,
      comment: '创建时间',
    },
    createdBy: {
      allowNull: true,
      type: STRING,
      comment: '创建者',
    },
    updatedAt: {
      allowNull: true,
      type: DATE,
      comment: '更新时间',
    },
    updatedBy: {
      allowNull: true,
      type: STRING,
      comment: '更新者',
    },
  });

  Salary.associate = function() {
    Salary.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
  };
  return Salary;
};
