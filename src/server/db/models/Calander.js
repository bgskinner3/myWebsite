const Sequelize = require('sequelize');
const db = require('../db');


const CalanderAndToDos = db.define('calander', {
  completed: {
    type: Sequelize.BOOLEAN,
    defaultValue: false,
  },
  content: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
  importance: {
    type: Sequelize.ENUM('urgent', 'taketime', 'moderate'),
    defaultValue: 'moderate',
  },
  
});

module.exports = { CalanderAndToDos };