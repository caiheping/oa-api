'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    const { INTEGER, DATE, STRING } = Sequelize;
    await queryInterface.createTable('clock_ins', {
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
        defaultValue: '1',
        comment: '类型（1公司打卡 2外出打卡）',
      },
      wifi: {
        type: STRING,
        comment: '打卡WiFi',
      },
      firstClockInAddr: {
        type: STRING,
        comment: '上班打卡地址',
      },
      firstClockInTime: {
        type: DATE,
        comment: '上班打卡时间',
      },
      lastClockInAddr: {
        type: STRING,
        comment: '下班打卡地址',
      },
      lastClockInTime: {
        type: DATE,
        comment: '下班打卡时间',
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
    await queryInterface.dropTable('clock_ins');
  },
};
