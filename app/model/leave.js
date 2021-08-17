'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Leave = app.model.define('leaves', {
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
    type: {
      allowNull: false,
      type: STRING,
      comment: '请假类型',
    },
    leaveDuration: {
      type: INTEGER,
      comment: '请假时长',
    },
    leaveReason: {
      type: STRING,
      comment: '请假原因',
    },
    status: {
      type: STRING,
      defaultValue: '0',
      comment: '状态',
    },
    startTime: {
      type: DATE,
      comment: '开始时间',
    },
    endTime: {
      type: DATE,
      comment: '结束时间',
    },
    remark: {
      type: INTEGER,
      comment: '备注',
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

  Leave.associate = function() {
    Leave.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
  };
  return Leave;
};
