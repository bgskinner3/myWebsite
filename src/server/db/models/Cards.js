const Sequelize = require('sequelize');
const db = require('../db');

const Cards = db.define('cards', {
  title: {
    type: Sequelize.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  description: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  field: {
    type: Sequelize.ENUM('bar', 'datascience', 'general'),
    defaultValue: 'general',
  },
});

module.exports = { Cards };
