'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('work_over_times', {
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
      workOverTimeDuration: {
        type: INTEGER,
        comment: '加班时长',
      },
      workOverTimeReason: {
        type: STRING,
        comment: '加班原因',
      },
      startTime: {
        type: DATE,
        comment: '开始时间',
      },
      endTime: {
        type: DATE,
        comment: '结束时间',
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
  },
  down: async queryInterface => {
    await queryInterface.dropTable('work_over_times');
  },
};
