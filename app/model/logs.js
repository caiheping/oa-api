'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const Logs = app.model.define('logs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    method: {
      type: STRING,
      comment: '请求方式',
    },
    url: {
      type: STRING,
      comment: '地址',
    },
    ip: {
      type: STRING,
      defaultValue: null,
      comment: 'ip',
    },
    data: {
      type: STRING,
      comment: '请求参数',
    },
    status: {
      type: INTEGER,
      comment: 'http状态码',
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

  return Logs;
};
