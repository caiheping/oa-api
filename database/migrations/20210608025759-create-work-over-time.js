'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('work_over_times', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      userId: {
        allowNull: false,
        type: Sequelize.INTEGER,
        comment: '用户id',
      },
      workOverTimeDuration: {
        type: Sequelize.INTEGER,
        comment: '加班时长',
      },
      workOverTimeReason: {
        type: Sequelize.STRING,
        comment: '加班原因',
      },
      startTime: {
        type: Sequelize.DATE,
        comment: '开始时间',
      },
      endTime: {
        type: Sequelize.DATE,
        comment: '结束时间',
      },
      status: {
        type: Sequelize.STRING,
        defaultValue: '0',
        comment: '审批状态',
      },
      remark: {
        type: Sequelize.INTEGER,
        comment: '审批备注',
      },
      createdAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '创建时间',
      },
      createdBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '创建者',
      },
      updatedAt: {
        allowNull: true,
        type: Sequelize.DATE,
        comment: '更新时间',
      },
      updatedBy: {
        allowNull: true,
        type: Sequelize.STRING,
        comment: '更新者',
      },
    });
  },
  down: async queryInterface => {
    await queryInterface.dropTable('work_over_times');
  },
};
