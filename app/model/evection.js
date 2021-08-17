'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Evection = app.model.define('evections', {
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
      comment: '出差类型',
    },
    evectionDuration: {
      type: INTEGER,
      comment: '出差时长',
    },
    evectionReason: {
      type: STRING,
      comment: '出差原因',
    },
    startTime: {
      type: DATE,
      comment: '开始日期',
    },
    endTime: {
      type: DATE,
      comment: '开始日期',
    },
    status: {
      type: STRING,
      defaultValue: '0',
      comment: '审批状态',
    },
    remark: {
      type: INTEGER,
      comment: '审批备注',
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

  Evection.associate = function() {
    Evection.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
  };
  return Evection;
};
