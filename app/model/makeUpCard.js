'use strict';

module.exports = app => {
  const { STRING, INTEGER, DATE } = app.Sequelize;

  const makeUpCard = app.model.define('make_up_cards', {
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
    clockInId: {
      allowNull: false,
      type: INTEGER,
      comment: '打卡id',
    },
    type: {
      allowNull: false,
      type: STRING,
      comment: '类型（上午/下午）',
    },
    makeUpCardReason: {
      type: STRING,
      comment: '补卡原因',
    },
    status: {
      type: STRING,
      defaultValue: '0',
      comment: '审批状态',
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

  makeUpCard.associate = function() {
    makeUpCard.belongsTo(app.model.Users, {
      foreignKey: 'userId',
    });
    makeUpCard.belongsTo(app.model.ClockIn, {
      foreignKey: 'clockInId',
    });
  };
  return makeUpCard;
};
