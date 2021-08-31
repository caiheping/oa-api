'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const SystemConfig = app.model.define('system_configs', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: INTEGER,
    },
    name: {
      allowNull: false,
      type: STRING,
      comment: '参数名称',
    },
    keyName: {
      allowNull: false,
      type: STRING,
      comment: '参数键名',
    },
    key: {
      allowNull: false,
      type: STRING,
      comment: '参数键值',
    },
    remark: {
      type: STRING,
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
  return SystemConfig;
};
