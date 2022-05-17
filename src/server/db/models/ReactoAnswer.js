const Sequelize = require('sequelize');
const db = require('../db');

const ReactoAnswer = db.define('reactoanswer', {
  answer: {
    type: Sequelize.TEXT,
    allowNull: false,
    validate: {
      notEmpty: true,
    },
  },
});

module.exports = { ReactoAnswer };