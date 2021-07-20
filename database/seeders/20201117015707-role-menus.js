'use strict';

module.exports = {
  up: async queryInterface => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('role_menus', [
      {
        roleId: 1,
        menuId: 1,
      },
      {
        roleId: 1,
        menuId: 2,
      },
      {
        roleId: 1,
        menuId: 3,
      },
      {
        roleId: 1,
        menuId: 4,
      },
      {
        roleId: 1,
        menuId: 5,
      },
      {
        roleId: 1,
        menuId: 6,
      },
      {
        roleId: 1,
        menuId: 7,
      },
      {
        roleId: 1,
        menuId: 8,
      },
      //
      {
        roleId: 1,
        menuId: 9,
      },
      {
        roleId: 1,
        menuId: 10,
      },
      {
        roleId: 1,
        menuId: 11,
      },
      {
        roleId: 1,
        menuId: 12,
      },
      {
        roleId: 1,
        menuId: 13,
      },
      {
        roleId: 1,
        menuId: 14,
      },
      {
        roleId: 1,
        menuId: 15,
      },
      {
        roleId: 1,
        menuId: 16,
      },
      {
        roleId: 1,
        menuId: 17,
      },
      {
        roleId: 1,
        menuId: 18,
      },
      {
        roleId: 1,
        menuId: 19,
      },
      {
        roleId: 1,
        menuId: 20,
      },
      {
        roleId: 1,
        menuId: 21,
      },
      {
        roleId: 1,
        menuId: 22,
      },
      {
        roleId: 1,
        menuId: 23,
      },
      {
        roleId: 1,
        menuId: 24,
      },
      {
        roleId: 1,
        menuId: 25,
      },
      {
        roleId: 1,
        menuId: 26,
      },
      {
        roleId: 1,
        menuId: 27,
      },
      {
        roleId: 1,
        menuId: 28,
      },
      {
        roleId: 1,
        menuId: 29,
      },
      {
        roleId: 1,
        menuId: 30,
      },
      {
        roleId: 1,
        menuId: 31,
      },
      {
        roleId: 1,
        menuId: 32,
      },
      {
        roleId: 1,
        menuId: 33,
      },
      {
        roleId: 1,
        menuId: 34,
      },
      {
        roleId: 1,
        menuId: 35,
      },
      {
        roleId: 1,
        menuId: 36,
      },
      {
        roleId: 1,
        menuId: 37,
      },
      {
        roleId: 1,
        menuId: 38,
      },
      {
        roleId: 1,
        menuId: 39,
      },
      {
        roleId: 1,
        menuId: 40,
      },
      {
        roleId: 1,
        menuId: 41,
      },
      {
        roleId: 1,
        menuId: 42,
      },
      {
        roleId: 1,
        menuId: 43,
      },
      {
        roleId: 1,
        menuId: 44,
      },
      {
        roleId: 1,
        menuId: 45,
      },
      {
        roleId: 1,
        menuId: 46,
      },
      {
        roleId: 1,
        menuId: 47,
      },
    ], {});
  },

  down: async queryInterface => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('role_menus', null, {});
  },
};
