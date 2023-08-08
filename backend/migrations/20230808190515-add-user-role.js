'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    'use strict';
    module.exports = {
      up: async (queryInterface, Sequelize) => {
        return queryInterface.addColumn('users', 'role', {
            type: Sequelize.DataTypes.ENUM,
            values: [
              'reviewer',
              'admin',
            ],
            defaultValue: 'reviewer'
          })
      },
    
      down: async (queryInterface, Sequelize) => {
        return queryInterface.removeColumn('users', 'role')
      }
    };
    
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
