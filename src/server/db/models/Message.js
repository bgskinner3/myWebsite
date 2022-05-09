const Sequelize = require('sequelize');
const db = require('../db');

const Message = db.define('message', {
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },

  },
  read: {
    type: Sequelize.ENUM('no', 'yes', 'save'),
    defaultValue: 'no'
  },
  email: {
    type: Sequelize.STRING
  }

});

module.exports = { Message };
